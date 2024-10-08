import axios from "axios";
import {fetch_url} from "@/structs/urls.ts";
import {FetchImageSize} from "@/structs/interfaces.ts";

export default async function fetchImageSize() : Promise<FetchImageSize[]> {
    try {
        const response = await axios
            .get(`${fetch_url}/image-plugin/extract_sizes/`, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
        if (response.data.extracted && response.data.extracted.length > 0) {
            return response.data.extracted as FetchImageSize[];
        }
        else {
            return [
                {
                    fileSize : "Null",
                    fileDimensions : "Null"
                }
            ]
        }
    }
    catch (err) {
        console.log(err)
        return [
            {
                fileSize : "Null",
                fileDimensions : "Null"
            }
        ]
    }
}
