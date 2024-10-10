<script lang="ts">
import {selectorState} from "@/structs/enums.ts";
import SubmitForm from "@/components/SubmitForm.vue";
import TopDescription from "@/components/TopDescription.vue";
import SendImageComponent from "@/components/SendImageComponent.vue";
import ImageButton from "@/components/ImageButton.vue";
import ChangeScreensContainer from "@/components/ChangeScreensContainer.vue";
import ImagesDataTable from "@/components/ImagesDataTable/ImagesDataTable.vue";
import Authorize from "@/components/Authorize.vue";
import Fab from "@/components/Fab.vue";

export default {
  components: {
    Authorize,
    ImagesDataTable,
    ChangeScreensContainer,
    ImageButton,
    SendImageComponent,
    TopDescription,
    SubmitForm,
    Fab
  }
};
</script>

<script setup lang="ts">
import {useAuthorizationBodyStore} from "@/pinia/AuthorizationBodyStore.ts";
import {useScreenSelectorStore} from "@/pinia/ScreenSelectorStore.ts";
import DeleteImagesComponentCollected from "@/components/CollectedComponents/DeleteImagesComponentCollected.vue";
import UploadImagesComponentCollected from "@/components/CollectedComponents/UploadImagesComponentCollected.vue";
const authStore = useAuthorizationBodyStore();
const screenStore = useScreenSelectorStore();
</script>

// using v-model we pass props that we would like to change in the future.
<template>
  <div v-if="authStore.getAuth">
    <Fab/>
    <ChangeScreensContainer/>
    <div v-if="screenStore.getScreenState === selectorState.UploadImages">
      <UploadImagesComponentCollected/>
    </div>
    <div v-else>
      <DeleteImagesComponentCollected/>
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
