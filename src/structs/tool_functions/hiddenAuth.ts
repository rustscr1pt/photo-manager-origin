import axios from "axios";
import {fetch_url} from "@/structs/urls.ts";

interface TokenPost {
    token : string
}

export default function hiddenAuth() : void {
    const detected_token : string | null = sessionStorage.getItem("auth-token");
    if (detected_token !== null) {
        console.log(`Token is detected in the storage : ${detected_token}`);
        const body : TokenPost = {
            token : detected_token
        }
        axios
            .post(`${fetch_url}/api/login/stealth`, body, {
                headers : {
                    "Content-Type" : "application/json"
                }
            })
            .then((response) => {
                if (response.data.is_succeed) {

                }
                else {
                    console.log(response.data.message);
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
