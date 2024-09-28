<script setup lang="ts">
import axios from 'axios';
import FileUpload from 'primevue/fileupload';
import Message from "primevue/message";
import {fetch_url} from "@/structs/urls.ts";
import {ref} from "vue";

const message = ref('');
const messageType = ref(''); // success or error

function uploadImage(event : {files : File[]}) {
  if (event.files.length > 0) {
    if (event.files.length === 1) {
      const imageFile = event.files[0];
      const formData = new FormData();
      formData.append('file', imageFile);
      axios
          .post(`${fetch_url}/image-plugin/add_image/`, formData, {
            headers : {
              'Content-Type' : 'multipart/form-data'
            }
          })
          .then(response => {
            console.log("Image is uploaded successfully.", response.data);
            message.value = "Изображение успешно добавлено.";
            messageType.value = 'success';
          })
          .catch(error => {
            console.log(`Error when uploading the image ${error}`);
            message.value = error;
            messageType.value = 'error';
          });
    }
    else {
      const formData = new FormData();
      event.files.forEach((file) => {
        formData.append('files', file);
      });
      axios
          .post(`${fetch_url}/image-plugin/add_images/`, formData, {
            headers : {
              'Content-Type' : 'multipart/form-data'
            }
          })
          .then(response => {
            console.log("Images are uploaded successfully.", response.data);
            message.value = "Изображения успешно добавлены.";
            messageType.value = 'success';
          })
          .catch(error => {
            console.log(`Error when uploading the image ${error}`);
            message.value = error;
            messageType.value = 'error';
          });
    }
  }
  else {
    console.log('No files detected')
  }
}
</script>

<template>
  <div>
    <FileUpload
        mode="basic"
        name="file"
        accept="image/*"
        :maxFileSize="1000000"
        :multiple="true"
        :auto="false"
        @select="uploadImage"
        chooseLabel="Browse"
    />
    <Message class="margin-notification" v-if="message" :severity="messageType === 'success' ? 'success' : 'error'">{{message}}</Message>

  </div>
</template>

<style scoped>
.margin-notification {
  margin-top: 2.5%;
}
</style>
