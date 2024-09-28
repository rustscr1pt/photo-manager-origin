<script lang="ts">
import {selectorState} from "@/structs/selectorState.ts";
import SubmitForm from "@/components/SubmitForm.vue";
import {RuleObject} from '@/structs/interfaces.ts';
import TopDescription from "@/components/TopDescription.vue";
import SendImageComponent from "@/components/SendImageComponent.vue";
import ImageButton from "@/components/ImageButton.vue";
import ChangeScreensContainer from "@/components/ChangeScreensContainer.vue";
import ImagesDataTable from "@/components/ImagesDataTable.vue";
import release_li_for_data from "@/structs/tool_functions/release_li_for_data.ts";
import {ReleaseEnum} from "@/structs/ReleaseEnum.ts"; // Import interface

export default {
  computed: {
    selectorState() {
      return selectorState
    }
  },
  components: {ImagesDataTable, ChangeScreensContainer, ImageButton, SendImageComponent, TopDescription, SubmitForm },
  data(): { selector_state: selectorState; rulesArray: RuleObject[]; browseArray : RuleObject[] } {
    return {
      selector_state: selectorState.DeleteImages,
      rulesArray: release_li_for_data(ReleaseEnum.rulesArray),
      browseArray : release_li_for_data(ReleaseEnum.browseArray)
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
      <ImagesDataTable/>
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
