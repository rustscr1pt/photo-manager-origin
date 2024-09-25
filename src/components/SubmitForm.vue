<script setup lang="ts">
import {selectorState} from "@/structs/selectorState.ts";
const props = defineProps<{
  modelValue: selectorState;
}>();
</script>

<template>
  <section class="submit-form-section">
    <p v-if="props.modelValue === selectorState.OneImage">Выберите одно изображение для загрузки</p>
    <p v-else>Выберите до 9 изображений для загрузки</p>
  </section>
</template>

<style scoped>
.submit-form-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}
</style>
