<script setup lang="ts">
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import {AuthorizationBody, AuthorizationPostRequest} from "@/structs/interfaces.ts";
import axios from "axios";
import {fetch_url} from "@/structs/urls.ts";
import {defineEmits, ref, watch} from "vue";

const props = defineProps<{
  modelValue : AuthorizationBody
}>();

const userLogin = ref(props.modelValue.userLogin);
const userPassword = ref(props.modelValue.userPassword);

const emit = defineEmits(['update:modelValue']);

watch(() => props.modelValue, (newValue) => {
  userLogin.value = newValue.userLogin;
  userPassword.value = newValue.userPassword;
}, {immediate : true})
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
    login : userLogin.value,
    password : userPassword.value
  };
  console.log(body)
  axios
      .post(`${fetch_url}/api/login/attempt`, body, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        if (response.data.is_succeed) {
          updateState();
        }
        else {
          console.log(response.data)
        }
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
