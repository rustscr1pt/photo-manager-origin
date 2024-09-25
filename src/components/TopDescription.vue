<script setup lang="ts">
import RuleObject from "@/components/interfaces.ts";
const props = defineProps<{
  modelValue: RuleObject[]; // Expecting an array of RuleObject
}>();
</script>

<template>
  <header class="presentation">
    Загрузить новые изображения
  </header>
  <body>
  <h1>
    Правила для корректной загрузки:
  </h1>
  <ul>
    <li v-for="li in props.modelValue">{{li.sentence}}</li>
  </ul>
  </body>
</template>

<style scoped>
header {
  font-size: 3vw;
  color: white;
}
h1 {
  font-size: 2vw;
}
</style>