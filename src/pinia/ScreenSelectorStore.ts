import {defineStore} from "pinia";
import {selectorState} from "@/structs/enums.ts";

export const useScreenSelectorStore = defineStore("ScreenSelector", {
    state : () => ({
        ScreenSelectorState : selectorState.DeleteImages
    }),
    getters : {
        getScreenState : (state) => state.ScreenSelectorState
    },
    actions : {
        setToWatch() : void {
            this.ScreenSelectorState = selectorState.DeleteImages
        },
        setToUpload() : void {
            this.ScreenSelectorState = selectorState.UploadImages
        }
    }
})
