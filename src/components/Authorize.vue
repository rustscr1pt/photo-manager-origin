<script setup lang="ts">
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import {AuthorizationBody, AuthorizationPostRequest} from "@/structs/interfaces.ts";
import axios from "axios";
import {fetch_url} from "@/structs/urls.ts";
import {defineEmits} from "vue";
const props = defineProps<{
  modelValue : AuthorizationBody
}>();
const {isAuthorized, userLogin, userPassword} = props.modelValue;
const emit = defineEmits(['update:modelValue']);
function updateState() : void {
  const newValue : AuthorizationBody = {
    isAuthorized : true,
    userLogin : "",
    userPassword : ""
  }
  emit('update:modelValue', newValue)
}
function handleLoginAttempt() : void {
  const body : AuthorizationPostRequest = {
    login : userLogin,
    password : userPassword
  }
  axios
      .post(`${fetch_url}/api/login/attempt`, body, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        console.log(response.data);
        updateState();
      })
      .catch((err) => {
        console.log(err)
      })
}
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
