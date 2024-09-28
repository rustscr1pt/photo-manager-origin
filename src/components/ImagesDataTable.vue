<script setup lang="ts">
import {onMounted, ref} from 'vue';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import extract_file_format from "@/structs/tool_functions/extract_file_format.ts";
import TableDeleteButton from "@/components/TableDeleteButton.vue";
import {ImageData} from "@/structs/interfaces.ts";
import fetchImages from "@/structs/tool_functions/fetchImages.ts";

const imageData = ref<ImageData[]>([]);

async function loadTable() : Promise<void> {
  const images = await fetchImages();
  imageData.value = images.map((img, index) => ({
    index : `${index + 1}`,
    name : `${img}`,
    category : "Изображение",
    format : extract_file_format(img)
  }))
}

onMounted(async () => {
  await loadTable()
})

</script>

<template>
  <div class="card">
    <DataTable :value="imageData" style="width: 80%" stripedRows tableStyle="min-width: 50rem">
      <Column field="index" header="Индекс"></Column>
      <Column field="name" header="Ссылка"></Column>
      <Column field="category" header="Тип данных"></Column>
      <Column field="format" header="Формат"></Column>
      <Column header="Удалить">
        <template #body="slotProps">
          <TableDeleteButton
              :link-to-delete="slotProps.data.name"
              @imageDeleted="loadTable"
          />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style scoped>
.card {
  margin-top: 5%;
}
</style>
