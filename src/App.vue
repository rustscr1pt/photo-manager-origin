<script lang="ts">
import Selector from "@/components/Selector.vue";
import {selectorState} from "@/components/selectorState.ts";
import SubmitForm from "@/components/SubmitForm.vue";
import RuleObject from '@/components/interfaces.ts';
import TopDescription from "@/components/TopDescription.vue";  // Import interface

export default {
  components: {TopDescription, SubmitForm, Selector },

  // Define the return type of `data()` method
  data(): { selector_state: selectorState; liArray: RuleObject[] } {
    return {
      selector_state: selectorState.OneImage,
      liArray: [
        {
          sentence: "Изображение должно быть квадратным."
        },
        {
          sentence: "Изображение должно быть в разрешении 900х900."
        },
        {
          sentence: "Изображение должно быть в формате .webp"
        },
        {
          sentence: "Перед загрузкой постарайтесь максимально минифицировать размер изображения."
        }
      ]
    };
  }
};
</script>

<template>
  <div>
    <TopDescription v-model="liArray"/>
    <Selector v-model="selector_state" />
    <SubmitForm v-model="selector_state" />
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>