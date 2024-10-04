<script setup lang="ts">
import {selectorState} from "@/structs/selectorState.ts";
import {useScreenSelectorStore} from "@/pinia/ScreenSelectorStore.ts";
import {useRulesArrayStore} from "@/pinia/RulesArrayStore.ts";
const screenStore = useScreenSelectorStore();
const arrayStore = useRulesArrayStore();
</script>

<template>
  <div
      v-if="screenStore.getScreenState === selectorState.DeleteImages"
      class="wrapper"
  >
    <h1>
      Просмотреть изображения в базе
    </h1>
    <article class="TopDescriptionSection">
      <h2>
        Возможности панели управления:
      </h2>
      <ul>
        <li v-for="li in arrayStore.getBrowseArray">{{li}}</li>
      </ul>
    </article>
  </div>
  <div
      v-else
      class="wrapper"
  >
    <h1 class="presentation">
      Загрузить новые изображения
    </h1>
    <article class="TopDescriptionSection">
      <h2 class="presentation">
        Правила для корректной загрузки:
      </h2>
      <ul>
        <li v-for="li in arrayStore.getRulesArray">{{li}}</li>
      </ul>
    </article>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
h1 {
  width: 80%;
  font-size: 3vw;
  color: white;
  text-align: center;
}
.TopDescriptionSection {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
