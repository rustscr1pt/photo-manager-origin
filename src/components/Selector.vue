<script setup lang="ts">
import {defineEmits, defineProps} from "vue";
import Button from 'primevue/button';
import {selectorState} from "@/structs/selectorState.ts";
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
    <Button
        label="Одно изображение"
        @click="updateState(selectorState.OneImage)"
        severity="info"
        icon="pi pi-image"
        rounded
        :style="{color : 'white'}"
    />
    <Button
        label="Несколько изображений"
        @click="updateState(selectorState.ManyImages)"
        severity="info"
        icon="pi pi-images"
        rounded
        :style="{color : 'white'}"
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
button {
  width: 40%;
  font-size: 1.2vw;
}
</style>
