<script setup lang="ts">
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import {useAuthorizationBodyStore} from "@/pinia/AuthorizationBodyStore.ts";
import {computed, onMounted, ref} from "vue";
import handleLoginAttempt from "@/structs/tool_functions/login_functions/handleLoginAttempt.ts";
import stealthLoginAttempt from "@/structs/tool_functions/login_functions/stealthLoginAttempt.ts";
import {authorizeGsap} from "@/gsap/Authorize/authorize-gsap.ts";

const authStore = useAuthorizationBodyStore();

const userLogin = computed({
  get : () => authStore.getLogin,
  set : (value : string) => authStore.setLogin(value)
})

const userPassword = computed({
  get : () => authStore.getPassword,
  set : (value : string) => authStore.setPassword(value)
})

const scopeRef = ref();

onMounted(() => {
  if (!stealthLoginAttempt()) {
    authorizeGsap(scopeRef)
  }
})

</script>
<template>
  <div class="authorize-main-div" ref="scopeRef">
    <div>
      <FloatLabel class="gsap-animate-auth-float">
        <label for="username">Логин</label>
        <InputText id="username" v-model="userLogin"/>
      </FloatLabel>
      <FloatLabel class="margin-field gsap-animate-auth-float">
        <label for="password">Пароль</label>
        <InputText id="password" v-model="userPassword" type="password"/>
      </FloatLabel>
      <Button
          id="buttonRef"
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
