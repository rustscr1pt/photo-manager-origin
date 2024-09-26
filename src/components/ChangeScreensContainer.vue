<script setup lang="ts">
import ImageButton from "@/components/ImageButton.vue";
import {selectorState} from "@/structs/selectorState.ts";
import {defineEmits} from "vue";

const props = defineProps<{
  modelValue : selectorState
}>();

const emit = defineEmits(['update:modelValue']);

function updateState(newState : selectorState) : void {
  emit('update:modelValue', newState)
}
</script>

<template>
<section>
  <ImageButton
      severity="info"
      color="white"
      icon="pi pi-image"
      width="45"
      :model-value="props.modelValue"
      @update:modelValue="updateState"
      font-size="1.2"
      label="Смотреть"
  />
  <ImageButton
      severity="info"
      color="white"
      icon="pi pi-image"
      width="45"
      :model-value="props.modelValue"
      @update:modelValue="updateState"
      font-size="1.2"
      label="Добавить"
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