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
  width : number,
  fontSize : number
}>()
function updateState(newState : selectorState) {
  if (newState === selectorState.UploadImages) {
    emit('update:modelValue', selectorState.DeleteImages);
  }
  else {
    emit('update:modelValue', selectorState.UploadImages);
  }
}
</script>

<template>
  <Button
      :label="props.label"
      @click="updateState(props.modelValue)"
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
