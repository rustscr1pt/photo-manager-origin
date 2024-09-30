<script lang="ts">
import {selectorState} from "@/structs/selectorState.ts";
import SubmitForm from "@/components/SubmitForm.vue";
import {RuleObject} from '@/structs/interfaces.ts';
import TopDescription from "@/components/TopDescription.vue";
import SendImageComponent from "@/components/SendImageComponent.vue";
import ImageButton from "@/components/ImageButton.vue";
import ChangeScreensContainer from "@/components/ChangeScreensContainer.vue";
import ImagesDataTable from "@/components/ImagesDataTable.vue";
import Authorize from "@/components/Authorize.vue";
import release_li_for_data from "@/structs/tool_functions/release_li_for_data.ts";
import {ReleaseEnum} from "@/structs/ReleaseEnum.ts";
import {onMounted} from "vue";

export default {
  components: {
    Authorize,
    ImagesDataTable,
    ChangeScreensContainer,
    ImageButton,
    SendImageComponent,
    TopDescription,
    SubmitForm },
  data(): {
    rulesArray: RuleObject[];
    browseArray : RuleObject[]
  } {
    return {
      rulesArray: release_li_for_data(ReleaseEnum.rulesArray),
      browseArray : release_li_for_data(ReleaseEnum.browseArray)
    }
  }
};
</script>

<script setup lang="ts">
import hiddenAuth from "@/structs/tool_functions/hiddenAuth.ts";
import {useAuthorizationBodyStore} from "@/pinia/AuthorizationBodyStore.ts";
import {useScreenSelectorStore} from "@/pinia/ScreenSelectorStore.ts"; // Import interface
const authStore = useAuthorizationBodyStore();
const screenStore = useScreenSelectorStore();
onMounted(() => {
  hiddenAuth()
})
</script>

// using v-model we pass props that we would like to change in the future.
<template>
  <div v-if="authStore.getAuth">
    <ChangeScreensContainer/>
    <div v-if="screenStore.ScreenSelectorState === selectorState.UploadImages">
      <TopDescription
          :array-of-rules="rulesArray"
          :selector-state="screenStore.ScreenSelectorState"/>
      <SubmitForm/>
      <SendImageComponent/>
    </div>
    <div v-else>
      <ImagesDataTable/>
    </div>
  </div>
  <div v-else>
    <Authorize v-model="authStore.getAuth"/>
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
