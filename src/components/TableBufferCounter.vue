<script setup lang="ts">
import {useImageSizeBufferStore} from "@/pinia/ImageSizeBufferStore.ts";
import {kb_to_mb_converter} from "../structs/tool_functions/data_managing_functions/kb_to_mb_converter.ts";
const imageBufferStore = useImageSizeBufferStore();
</script>

<template>
  <article class="TopDescriptionSection">
    <h2 class="h2-gsap-table-buffer">Информация о изображениях:</h2>
    <section class="TopDescriptionSectionUlAlignLeft">
      <ul>
        <li class="li-gsap-table-buffer">
          Всего изображений обнаружено : {{ imageBufferStore.getTotalImages }}
        </li>
        <li class="li-gsap-table-buffer">
          Общий размер всех изображений в базе : {{ imageBufferStore.getBufferSize }} кб ~ {{ kb_to_mb_converter(imageBufferStore.getBufferSize) }} мб
        </li>
      </ul>
    </section>
  </article>
</template>

<style scoped>
.TopDescriptionSection {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1% 0 0 0;
}
.TopDescriptionSectionUlAlignLeft {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>