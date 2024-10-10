import {defineStore} from "pinia";
import {AuthorizationBody} from "@/structs/interfaces.ts";

export const useAuthorizationBodyStore = defineStore('AuthorizationBody', {
    state: () : AuthorizationBody => ({
        isAuthorized : true,
        userLogin : "",
        userPassword : ""
    }),
    getters: {
        getAuth : (state) => state.isAuthorized,
        getLogin : (state) => state.userLogin,
        getPassword : (state) => state.userPassword
    },
    actions : {
        toggleAuth() : void {
            this.isAuthorized = !this.isAuthorized
        },
        setLogin(newValue : string) : void {
            this.userLogin = newValue
        },
        setPassword(newValue : string) : void {
            this.userPassword = newValue
        },
        clearAndSetAsAuthorized() : void {
            this.isAuthorized = true;
            this.userLogin = "";
            this.userPassword = "";
        },
        logOutAndReset() : void {
            localStorage.clear();
            this.isAuthorized = false;
            this.userLogin = "";
            this.userPassword = "";
        }
    }
})

