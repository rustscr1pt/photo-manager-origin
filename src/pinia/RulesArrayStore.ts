import {defineStore} from "pinia";
import release_li_for_data from "@/structs/tool_functions/release_li_for_data.ts";
import {ReleaseEnum} from "@/structs/ReleaseEnum.ts";
import {RuleObject} from "@/structs/interfaces.ts";

interface RulesArrayInterface {
    rulesArray : RuleObject[],
    browseArray : RuleObject[]
}

export const useRulesArrayStore = defineStore("RulesArray", {
    state : () : RulesArrayInterface => ({
        rulesArray : release_li_for_data(ReleaseEnum.rulesArray),
        browseArray : release_li_for_data(ReleaseEnum.browseArray)
    }),
    getters : {
        getRulesArray : (state) => state.rulesArray
    }
})
