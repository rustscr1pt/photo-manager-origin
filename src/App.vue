<script lang="ts">
import {selectorState} from "@/structs/selectorState.ts";
import SubmitForm from "@/components/SubmitForm.vue";
import {RuleObject} from '@/structs/interfaces.ts';
import TopDescription from "@/components/TopDescription.vue";
import SendImageComponent from "@/components/SendImageComponent.vue";
import ImageButton from "@/components/ImageButton.vue";
import ChangeScreensContainer from "@/components/ChangeScreensContainer.vue";  // Import interface

export default {
  computed: {
    selectorState() {
      return selectorState
    }
  },
  components: {ChangeScreensContainer, ImageButton, SendImageComponent, TopDescription, SubmitForm },
  data(): { selector_state: selectorState; rulesArray: RuleObject[]; browseArray : RuleObject[] } {
    return {
      selector_state: selectorState.DeleteImages,
      rulesArray: [
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
      ] as RuleObject[],
      browseArray : [
        {
          sentence: "Вы можете просмотреть все активные изображения в каталоге"
        },
        {
          sentence: "Вы можете удалить изображение если считаете, что оно не нужно / не актуально"
        },
        {
          sentence: "Вы можете узнать дополнительную информацию по поводу интересующего вас изображения"
        }
      ] as RuleObject[]
    };
  }
};
</script>

// using v-model we pass props that we would like to change in the future.
<template>
  <div>
    <ChangeScreensContainer v-model="selector_state"/>
    <div v-if="selector_state === selectorState.UploadImages">
      <TopDescription
          :array-of-rules="rulesArray"
          :selector-state="selector_state"/>
      <SubmitForm
          v-model="selector_state"
      />
      <SendImageComponent/>
    </div>
    <div v-else>
      <TopDescription
          :array-of-rules="browseArray"
          :selector-state="selector_state"
      />
    </div>
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
