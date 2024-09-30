<script setup lang="ts">
import {useScreenSelectorStore} from "@/pinia/ScreenSelectorStore.ts";
import Button from "primevue/button";

const props = defineProps<{
  label : string,
  severity : string,
  icon : string,
  color : string,
  width : string,
  fontSize : string,
  condition : string
}>()

function changeScreen() : void {
  const store = useScreenSelectorStore();
  if (props.condition === "delete") {
    store.setToUpload();
  }
  else {
    store.setToWatch();
  }
}

</script>

<template>
  <Button
      :label="props.label"
      @click="changeScreen"
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
