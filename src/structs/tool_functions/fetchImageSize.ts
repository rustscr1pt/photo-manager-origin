import axios from "axios";
import {fetch_url} from "@/structs/urls.ts";

export default async function fetchImageSize() : Promise<string[]> {
    try {
        const response = await axios
            .get(`${fetch_url}/image-plugin/extract_sizes/`, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
        if (response.data.extracted && response.data.extracted.length > 0) {
            return response.data.extracted as string[];
        }
        else {
            return ["Null"]
        }
    }
    catch (err) {
        console.log(err)
        return ["Null"]
    }
}
