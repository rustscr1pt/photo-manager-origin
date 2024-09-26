<script setup lang="ts">
import ImageButton from "@/components/ImageButton.vue";
import {selectorState} from "@/structs/selectorState.ts";
import {defineEmits} from "vue";

const props = defineProps<{
  modelValue : selectorState
}>();
// We create emit, so we could update the parent's value
const emit = defineEmits(['update:modelValue']);

// We use function to update the value which this component will get in the future,
// and to deliver it to parent
function updateState(newState : selectorState) : void {
  emit('update:modelValue', newState)
}
</script>

// Use @update:modelValue, so when value is changed => it would be delivered to the parent
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