<script setup lang="ts">
import { ref } from 'vue';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import extract_file_format from "@/structs/tool_functions/extract_file_format.ts";
import TableDeleteButton from "@/components/TableDeleteButton.vue";
function fetchImages() : string[] {
  return [
    "https://trustedapi.space/images/picture1.webp",
    "https://trustedapi.space/images/picture2.webp",
    "https://trustedapi.space/images/picture3.webp",
    "https://trustedapi.space/images/picture4.webp"
  ]
}
const imageData = ref(
    fetchImages().map((img, index) => ({
          index : `${index + 1}`,
          name : `${img}`,
          category : "Изображение",
          format : extract_file_format(img)
        })
    )
);
</script>

<template>
  <div class="card">
    <DataTable :value="imageData" stripedRows tableStyle="min-width: 50rem">
      <Column field="index" header="Индекс"></Column>
      <Column field="name" header="Ссылка"></Column>
      <Column field="category" header="Тип данных"></Column>
      <Column field="format" header="Формат"></Column>
      <Column header="Удалить">
        <template #body="slotProps">
          <TableDeleteButton :link-to-delete="slotProps.data.name"/>
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
