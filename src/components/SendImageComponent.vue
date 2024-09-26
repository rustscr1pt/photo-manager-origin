<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import FileUpload from 'primevue/fileupload';
import {fetch_url} from "@/structs/urls.ts";

const selectedFile = ref<File | null>(null);
function uploadImage(event : {files : File[]}) {
  if (event.files.length > 0) {
    const imageFile = event.files[0];
    const formData = new FormData();
    formData.append('image', imageFile);
    axios
        .post(`${fetch_url}/image-plugin/add_images`, formData, {
          headers : {
            'Content-Type' : 'multipart/form-data'
          }
        })
        .then(response => {
          console.log("Image is uploaded successfully.", response.data)
        })
        .catch(error => {
          console.log(`Error when uploading the image ${error}`)
        });
  }
  else {
    console.log('No files detected')
  }
}
</script>

<template>
  <div>
    <FileUpload
        name="image"
        accept="image/*"
        customUpload
        :uploadHandler="uploadImage"
        :auto="false"
        chooseLabel="Загрузка изображения"
        uploadLabel="Upload"
    />
  </div>
</template>

<style scoped>

</style>
