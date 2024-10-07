<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import TableDeleteButton from "@/components/TableDeleteButton.vue";
import { ImageData } from "@/structs/interfaces.ts";
import TableBufferCounter from "@/components/TableBufferCounter.vue";
import {loadTable} from "@/components/ImagesDataTable/functions/loadTable.ts";

// Store the data for the table
const imageData = ref<ImageData[]>([]);
// Keep track of expanded rows
const expandedRows = ref([]);
// Load data on component mount
onMounted(async () => {
  await loadTable(imageData);
});
</script>

<template>
  <TableBufferCounter/>
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
  margin: 3% 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
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
