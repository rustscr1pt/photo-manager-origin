<script setup lang="ts">
import {selectorState} from "@/structs/enums.ts";
import {useScreenSelectorStore} from "@/pinia/ScreenSelectorStore.ts";
import {useRulesArrayStore} from "@/pinia/RulesArrayStore.ts";
import {onMounted, onUnmounted, ref} from "vue";
import {topDescriptionGsap} from "@/gsap/TopDescription/topdescription-gsap.ts";
const screenStore = useScreenSelectorStore();
const arrayStore = useRulesArrayStore();

const scopeRef = ref();
let ctx : gsap.Context | undefined;

onMounted(() => {
  ctx = topDescriptionGsap(scopeRef);
})
onUnmounted(() => {
  if (ctx) {
    ctx.clear()
  }
})
</script>

<template>
  <div
      v-if="screenStore.getScreenState === selectorState.DeleteImages"
      class="wrapper"
      ref="scopeRef"
  >
    <h1>
      Просмотреть изображения в базе
    </h1>
    <article class="TopDescriptionSection">
      <h2 class="h-description-target">
        Возможности панели управления:
      </h2>
      <ul class="TopDescriptionSectionUlAlignLeft">
        <li
            v-for="li in arrayStore.getBrowseArray"
            class="li-description-target"
        >
          {{li}}
        </li>
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
      <h2 class="h-description-target">
        Правила для корректной загрузки:
      </h2>
      <section class="TopDescriptionSectionUlAlignLeft">
        <ul>
          <li
              v-for="li in arrayStore.getRulesArray"
              class="li-description-target"
          >
            {{li}}
          </li>
        </ul>
      </section>
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
