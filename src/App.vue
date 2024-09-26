<script lang="ts">
import {selectorState} from "@/structs/selectorState.ts";
import SubmitForm from "@/components/SubmitForm.vue";
import RuleObject from '@/structs/interfaces.ts';
import TopDescription from "@/components/TopDescription.vue";
import SendImageComponent from "@/components/SendImageComponent.vue";  // Import interface

export default {
  components: {SendImageComponent, TopDescription, SubmitForm },

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
    <SubmitForm v-model="selector_state" />
    <SendImageComponent/>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
