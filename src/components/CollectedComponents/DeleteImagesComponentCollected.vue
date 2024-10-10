<script setup lang="ts">
import TableBufferCounter from "@/components/TableBufferCounter.vue";
import ImagesDataTable from "@/components/ImagesDataTable/ImagesDataTable.vue";
import TopDescription from "@/components/TopDescription.vue";
import {onMounted, onUnmounted, ref} from "vue";
import {deleteImagesComponentCollected_gsap} from "@/gsap/DeleteImagesComponentCollected/DeleteImagesComponentCollected_gsap.ts";

const scopeRef = ref();
let ctx : gsap.Context | undefined;

onMounted(() => {
  ctx = deleteImagesComponentCollected_gsap(scopeRef);
})
onUnmounted(() => {
  if (ctx) {
    ctx.clear()
  }
})
</script>

<template>
<div ref="scopeRef">
  <TopDescription/>
  <TableBufferCounter/>
  <ImagesDataTable/>
</div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>