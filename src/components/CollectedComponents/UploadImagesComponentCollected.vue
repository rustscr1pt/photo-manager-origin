<script setup lang="ts">
import TopDescription from "@/components/TopDescription.vue";
import SubmitForm from "@/components/SubmitForm.vue";
import SendImageComponent from "@/components/SendImageComponent.vue";
import {onMounted, onUnmounted, ref} from "vue";
import {uploadImagesComponentCollected_gsap} from "@/gsap/UploadImagesComponentCollected/UploadImagesComponentCollected_gsap.ts";

const scopeRef = ref();
let ctx : gsap.Context | undefined;

onMounted(() => {
  ctx = uploadImagesComponentCollected_gsap(scopeRef);
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
  <SubmitForm/>
  <SendImageComponent/>
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