<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import extract_file_format from "@/structs/tool_functions/data_managing_functions/extract_file_format.ts";
import TableDeleteButton from "@/components/TableDeleteButton.vue";
import { ImageData } from "@/structs/interfaces.ts";
import fetchImages from "@/structs/tool_functions/fetch_functions/fetchImages.ts";
import fetchImageSize from "@/structs/tool_functions/fetch_functions/fetchImageSize.ts";

// Store the data for the table
const imageData = ref<ImageData[]>([]);
// Keep track of expanded rows
const expandedRows = ref([]);

// Function to load the table data
async function loadTable(): Promise<void> {
  try {
    const images : string[] = await fetchImages();
    const sizes : string[] = await fetchImageSize();
    const imageDataPromises = images.map((img, index) => ({
      index: `${index + 1}`,
      name: `${img}`,
      category: "Изображение",
      format: extract_file_format(img),
      size : sizes[index] ?? "Null"
    }))
    imageData.value = await Promise.all(imageDataPromises);
  }
  catch (err) {
    console.log(err)
  }
}
// Load data on component mount
onMounted(async () => {
  await loadTable();
});
</script>

<template>
  <div class="card">
    <DataTable
        :value="imageData"
        v-model:expandedRows="expandedRows"
        dataKey="index"
        showGridlines
        stripedRows
        tableStyle="min-width: 50rem"
        :style="{ width: '80%' }"
    >
      <Column expander style="width: 3em"/>
      <Column field="index" header="Индекс"></Column>
      <Column field="name" header="Ссылка"></Column>
      <Column field="category" header="Тип данных"></Column>
      <Column field="format" header="Формат"></Column>
      <Column field="size" header="Размер"></Column>
      <Column header="Удалить">
        <template #body="slotProps">
          <TableDeleteButton
              :link-to-delete="slotProps.data.name"
              @imageDeleted="loadTable"
          />
        </template>
      </Column>
    <!-- Expanded row content to display image -->
    <template #expansion="slotProps">
      <div class="photo-expansion-div">
        <img
            :src="slotProps.data.name"
            :alt="slotProps.data.name"
            class="expanded-image"
        />
      </div>
    </template>
    </DataTable>
  </div>
</template>

<style scoped>
.card {
  margin-top: 5%;
}

/* Styles for the expanded image */
.photo-expansion-div {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
}

.expanded-image {
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
}
</style>
