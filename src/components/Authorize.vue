<script setup lang="ts">
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import {useAuthorizationBodyStore} from "@/pinia/AuthorizationBodyStore.ts";
import {computed, onMounted} from "vue";
import handleLoginAttempt from "@/structs/tool_functions/handleLoginAttempt.ts";

const authStore = useAuthorizationBodyStore();

const userLogin = computed({
  get : () => authStore.getLogin,
  set : (value : string) => authStore.setLogin(value)
})

const userPassword = computed({
  get : () => authStore.getPassword,
  set : (value : string) => authStore.setPassword(value)
})

onMounted(() => {

})

</script>
<template>
  <div class="authorize-main-div">
    <div>
      <FloatLabel>
        <label for="username">Логин</label>
        <InputText id="username" v-model="userLogin"/>
      </FloatLabel>
      <FloatLabel class="margin-field">
        <label for="password">Пароль</label>
        <InputText id="password" v-model="userPassword" type="password"/>
      </FloatLabel>
      <Button
          class="margin-field"
          label="Войти"
          icon="pi pi-sign-in"
          iconPos="right"
          severity="success"
          @click="handleLoginAttempt"
      />
    </div>
  </div>
</template>
<style scoped>
.authorize-main-div {
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
.margin-field {
  margin-top: 20%;
  width: 100%;
}
</style>
