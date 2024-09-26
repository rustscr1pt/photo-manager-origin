<script setup lang="ts">
import {RuleObject} from "@/structs/interfaces.ts";
import {selectorState} from "@/structs/selectorState.ts";

const props = defineProps<{
  arrayOfRules: RuleObject[],
  selectorState : selectorState
}>();
</script>

<template>
  <h1 v-if="props.selectorState === selectorState.UploadImages" class="presentation">
    Загрузить новые изображения
  </h1>
  <h1 v-else>
    Просмотреть изображения в базе
  </h1>
  <section class="TopDescriptionSection">
    <h2 v-if="props.selectorState === selectorState.UploadImages" class="presentation">
      Правила для корректной загрузки:
    </h2>
    <h2 v-else>
      Возможности панели управления:
    </h2>
    <ul>
      <li v-for="li in props.arrayOfRules">{{li.sentence}}</li>
    </ul>
  </section>
</template>

<style scoped>
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
