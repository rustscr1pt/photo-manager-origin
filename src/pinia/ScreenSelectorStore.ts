import {defineStore} from "pinia";
import {selectorState} from "@/structs/selectorState.ts";

export const useScreenSelectorStore = defineStore("ScreenSelector", {
    state : () => ({
        ScreenSelectorState : selectorState.DeleteImages
    }),
    getters : {
        getScreenState : (state) => state.ScreenSelectorState
    },
    actions : {
        toggleScreenState() : void {
            this.ScreenSelectorState = this.ScreenSelectorState === selectorState.DeleteImages ? selectorState.UploadImages : selectorState.DeleteImages
        },
        setToWatch() : void {
            this.ScreenSelectorState = selectorState.DeleteImages
        },
        setToUpload() : void {
            this.ScreenSelectorState = selectorState.UploadImages
        }
    }
})
