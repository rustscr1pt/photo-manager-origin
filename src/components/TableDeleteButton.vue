<script setup lang="ts">
import Button from "primevue/button";
import axios from "axios";
import {fetch_url} from "@/structs/urls.ts";
import {ImageToDeletePost} from "@/structs/interfaces.ts";
const props = defineProps<{
  linkToDelete : string
}>();
function deleteImageFromBase() {
  const json_body : ImageToDeletePost = {
    file_to_delete : props.linkToDelete
  };
  axios
      .post(`${fetch_url}/image-plugin/delete_image`, json_body, {
        headers : {
          "Content-Type" : "application/json"
        }
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(`${response.data.response}`)
        }
        else {
          console.log(`Error when trying to delete an image. ${response.data.response}`)
        }
      })
      .catch(err => {
        console.log(`Error when making a request. ${err}`)
      })
}
</script>

<template>
  <Button
      icon="pi pi-eraser"
      severity="danger"
      @click="deleteImageFromBase"
  />
</template>

<style scoped>

</style>
