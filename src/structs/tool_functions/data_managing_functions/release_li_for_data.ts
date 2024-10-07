import {RuleObject} from "@/structs/interfaces.ts";
import {ReleaseEnum} from "@/structs/enums.ts";

export default function release_li_for_data(condition : ReleaseEnum) : RuleObject[] {
    switch (condition) {
        case ReleaseEnum.rulesArray:
            return [
                {
                    sentence: "Изображение должно быть размером не больше 1мб ~ 1000кб"
                },
                {
                    sentence: "Изображение должно быть квадратным, в разрешении 900х900."
                },
                {
                    sentence: "Предпочтительный формат изображения - .webp"
                },
                {
                    sentence: "Перед загрузкой постарайтесь максимально минифицировать размер изображения."
                },
                {
                    sentence: "Лучше всего не превышать размер в 100кб для одного изображения, в противном случае виджет будет долго загружаться на сайте."
                }
            ]
        case ReleaseEnum.browseArray:
            return [
                {
                    sentence: "Просмотреть все активные изображения в каталоге"
                },
                {
                    sentence: "Удалить изображение если считаете, что оно не нужно / не актуально"
                },
                {
                    sentence: "Узнать дополнительную информацию по поводу интересующего вас изображения"
                }
            ]
    }
}
