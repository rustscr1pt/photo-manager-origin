import axios from "axios";
import {fetch_url} from "@/structs/urls.ts";
import {useAuthorizationBodyStore} from "@/pinia/AuthorizationBodyStore.ts";

interface StealthLoginInterface {
    token : string
}

export default function stealthLoginAttempt() : boolean {
    if (localStorage.getItem("auth-token") !== null) {
        const bodyToSent : StealthLoginInterface = {
            token : localStorage.getItem("auth-token") as string
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
                    return true
                }
                else {
                    console.log(response.data)
                    return false
                }
            })
            .catch((err) => {
                console.log(err)
                return false
            })
    }
    return false
}
