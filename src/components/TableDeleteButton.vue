<script setup lang="ts">
import Button from "primevue/button";
const props = defineProps<{
  linkToDelete : string
}>();
function deleteImageFromBase() {
  // There should be placed a logic for deleting the image from the db
  console.log(props.linkToDelete)
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
