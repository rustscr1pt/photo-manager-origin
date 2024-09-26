<script setup lang="ts">
import {onMounted, ref} from 'vue';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import extract_file_format from "@/structs/tool_functions/extract_file_format.ts";
import TableDeleteButton from "@/components/TableDeleteButton.vue";
import axios from "axios";
import {fetch_url} from "@/structs/urls.ts";
import {ImageData} from "@/structs/interfaces.ts";
async function fetchImages() : Promise<string[]> {
  try {
    const response = await axios
        .get(`${fetch_url}/image-plugin/extract_images/`, {
          headers: {
            "Content-Type": "application/json"
          }
        });
    if (response.data.extracted && response.data.extracted.length > 0) {
      return response.data.extracted as string[];
    }
    else {
      return ["Null"]
    }
  }
  catch (err) {
    console.log(err);
    return ["Null"]
  }
}

const imageData = ref<ImageData[]>([]);

onMounted(async () => {
  const images = await fetchImages();
  imageData.value = images.map((img, index) => ({
    index : `${index + 1}`,
    name : `${img}`,
    category : "Изображение",
    format : extract_file_format(img)
  }))
})
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
