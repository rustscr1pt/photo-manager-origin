import {defineStore} from "pinia";
import {ImageSizeBufferStore} from "@/structs/interfaces.ts";
import {get_total_buffer_size} from "@/structs/tool_functions/data_managing_functions/get_total_buffer_size.ts";

export const useImageSizeBufferStore = defineStore('ImageSizeBuffer', {
    state : () : ImageSizeBufferStore => ({
        totalImages : 0,
        bufferSize : 0,
    }),
    getters : {
        getTotalImages : (state) => state.totalImages,
        getBufferSize : (state) => state.bufferSize
    },
    actions : {
        updateValuesFromDataTable(images_vector : string[], sizes_vector : string[]) : void {
            this.totalImages = images_vector.length;
            this.bufferSize = get_total_buffer_size(sizes_vector)
        }
    }
})
