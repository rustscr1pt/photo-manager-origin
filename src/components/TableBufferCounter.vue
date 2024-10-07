<script setup lang="ts">
import {useImageSizeBufferStore} from "@/pinia/ImageSizeBufferStore.ts";
const imageBufferStore = useImageSizeBufferStore();
</script>

<template>
  <article class="TopDescriptionSection">
    <h2 class="presentation">Информация о изображениях:</h2>
    <section class="TopDescriptionSectionUlAlignLeft">
      <ul>
        <li>
          Всего изображений обнаружено : {{ imageBufferStore.getTotalImages }}
        </li>
        <li>
          Общий размер всех изображений в базе : {{ imageBufferStore.getBufferSize }} кб
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