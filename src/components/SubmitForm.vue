<script setup lang="ts">
import {selectorState} from "@/structs/selectorState.ts";
const props = defineProps<{
  modelValue: selectorState;
}>();
</script>

<template>
  <section class="submit-form-section">
    <p v-if="props.modelValue === selectorState.OneImage">Select one image for uploading</p>
    <p v-else>Select multiple images for uploading</p>
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
