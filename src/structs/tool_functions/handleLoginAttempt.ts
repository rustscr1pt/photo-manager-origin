import {AuthorizationPostRequest} from "@/structs/interfaces.ts";
import axios from "axios";
import {fetch_url} from "@/structs/urls.ts";
import {useAuthorizationBodyStore} from "@/pinia/AuthorizationBodyStore.ts";

export default function handleLoginAttempt() : void {
    const authStore = useAuthorizationBodyStore();
    const body : AuthorizationPostRequest = {
        login : authStore.getLogin,
        password : authStore.getPassword
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
                sessionStorage.setItem("auth-token", response.data.message);
                authStore.clearAndSetAsAuthorized();
            }
            else {
                console.log(response.data)
            }
        })
        .catch((err) => {
            console.log(err)
        })
}
