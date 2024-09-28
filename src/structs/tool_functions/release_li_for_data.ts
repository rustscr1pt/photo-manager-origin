import {RuleObject} from "@/structs/interfaces.ts";
import {ReleaseEnum} from "@/structs/ReleaseEnum.ts";

export default function release_li_for_data(condition : ReleaseEnum) : RuleObject[] {
    switch (condition) {
        case ReleaseEnum.rulesArray:
            return [
                {
                    sentence: "Изображение должно быть размером не больше 1мб ~ 1000кб"
                },
                {
                    sentence: "Изображение должно быть в разрешении 900х900."
                },
                {
                    sentence: "Изображение должно быть в формате .webp"
                },
                {
                    sentence: "Перед загрузкой постарайтесь максимально минифицировать размер изображения."
                }
            ]
        case ReleaseEnum.browseArray:
            return [
                {
                    sentence: "Вы можете просмотреть все активные изображения в каталоге"
                },
                {
                    sentence: "Вы можете удалить изображение если считаете, что оно не нужно / не актуально"
                },
                {
                    sentence: "Вы можете узнать дополнительную информацию по поводу интересующего вас изображения"
                }
            ]
    }
}
