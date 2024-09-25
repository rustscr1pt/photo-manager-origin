<script setup lang="ts">
import {defineEmits, defineProps} from "vue";
import {selectorState} from "@/structs/selectorState.ts";
import ImageButton from "@/components/ImageButton.vue";
const props = defineProps<{
  modelValue : selectorState
}>();
const emit = defineEmits(['update:modelValue']);
function updateState(newState : selectorState) {
  emit('update:modelValue', newState);
}
</script>

<template>
  <section>
    <ImageButton
        severity="info"
        color="white"
        icon="pi pi-image"
        :model-value="modelValue"
        label="Одно изображение"
        width="40"
        font-size="1.2"
        @update:modelValue="updateState"
    />
    <ImageButton
        severity="info"
        color="white"
        icon="pi pi-images"
        :model-value="modelValue"
        label="Несколько изображений"
        width="40"
        font-size="1.2"
        @update:modelValue="updateState"
    />
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50%;
  margin: 2.5% 0;
}
</style>
