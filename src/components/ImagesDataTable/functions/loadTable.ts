import fetchImages from "@/structs/tool_functions/fetch_functions/fetchImages.ts";
import fetchImageSize from "@/structs/tool_functions/fetch_functions/fetchImageSize.ts";
import extract_file_format from "@/structs/tool_functions/data_managing_functions/extract_file_format.ts";
import {ImageData} from "@/structs/interfaces.ts";
import {Ref} from "vue";
import {useImageSizeBufferStore} from "@/pinia/ImageSizeBufferStore.ts";

export async function loadTable(
    imageData :  Ref<{index: string, name: string, category: string, format: string}[], ImageData[] | {index: string, name: string, category: string, format: string}[]>,
): Promise<void> {
    const useImageSizeBuffer = useImageSizeBufferStore();
    try {

        const images : string[] = await fetchImages();
        const sizes : string[] = await fetchImageSize();

        useImageSizeBuffer.updateValuesFromDataTable(images, sizes);

        const imageDataPromises = images.map((img, index) => ({
            index: `${index + 1}`,
            name: `${img}`,
            category: "Изображение",
            format: extract_file_format(img),
            size : sizes[index] ?? "Null"
        }))
        imageData.value = await Promise.all(imageDataPromises);
    }
    catch (err) {
        console.log(err)
    }
}