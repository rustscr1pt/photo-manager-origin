<script setup lang="ts">
import ImageButton from "@/components/ImageButton.vue";
</script>


<template>
<section>
  <ImageButton
      severity="info"
      color="white"
      icon="pi pi-image"
      width="45"
      font-size="1.2"
      label="Смотреть"
      condition="upload"
  />
  <ImageButton
      severity="info"
      color="white"
      icon="pi pi-image"
      width="45"
      font-size="1.2"
      label="Добавить"
      condition="delete"
  />
</section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 80%;
  margin-top: 2.5%;
}
</style>
