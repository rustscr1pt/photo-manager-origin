<script setup lang="ts">
import {selectorState} from "@/structs/selectorState.ts";
import Button from "primevue/button";
import {defineEmits} from "vue";

const emit = defineEmits(['update:modelValue']);

const props = defineProps<{
  modelValue : selectorState,
  label : string,
  severity : string,
  icon : string,
  color : string,
  width : string,
  fontSize : string
}>()

function updateState() : void {
  const newState = props.modelValue === selectorState.UploadImages ? selectorState.DeleteImages : selectorState.UploadImages;
  emit('update:modelValue', newState);
}
</script>

<template>
  <Button
      :label="props.label"
      @click="updateState"
      :severity="props.severity"
      :icon="props.icon"
      rounded
      :style="{
        color : props.color,
        width : `${props.width}%`,
        fontSize : `${props.fontSize}vw`
      }"
  />
</template>

<style scoped>

</style>
