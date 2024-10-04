import axios from "axios";
import {fetch_url} from "@/structs/urls.ts";
import {useAuthorizationBodyStore} from "@/pinia/AuthorizationBodyStore.ts";

interface StealthLoginInterface {
    token : string
}

export default function stealthLoginAttempt() : void {
    if (sessionStorage.getItem("auth-token") !== null) {
        const bodyToSent : StealthLoginInterface = {
            token : sessionStorage.getItem("auth-token") as string
        };
        axios
            .post(`${fetch_url}/api/login/stealth`, bodyToSent, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((response) => {
                if (response.data.is_succeed) {
                    const authStore = useAuthorizationBodyStore();
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
}
