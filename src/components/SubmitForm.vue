<script setup lang="ts">
import {selectorState} from "@/structs/selectorState.ts";
const props = defineProps<{
  modelValue: selectorState;
}>();
</script>

<template>
  <section class="submit-form-section">
    <p>Выберите до 10 изображений для загрузки</p>
  </section>
</template>

<style scoped>
.submit-form-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 2.5% 0;
}
p {
  color: white;
  font-size: 2vw;
}
</style>
