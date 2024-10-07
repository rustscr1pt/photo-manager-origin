<script setup lang="ts">
import SpeedDial from "primevue/speeddial";
import {ref} from "vue";
import {useAuthorizationBodyStore} from "@/pinia/AuthorizationBodyStore.ts";
const authStore = useAuthorizationBodyStore();
const actions = ref(
    [
      {
        label: 'Exit',
        icon: 'pi pi-user-minus',
        command: () => {
          authStore.logOutAndReset()
        }
      }
    ]
)
</script>

<template>
  <SpeedDial
      :model="actions"
      direction="up"
      style="position: fixed;
      left: 5%;
      bottom: 5%"
  />
</template>

<style scoped>

</style>