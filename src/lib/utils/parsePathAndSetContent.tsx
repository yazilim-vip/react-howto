import _ from 'underscore'

import { Category } from '../models/Category'
import { ParsedContent } from '../models/ParsedContent'
import { ParsedUrl } from '../models/ParsedUrl'

/**
 *
 * Example1
 * url: https://www.yazilim.vip/howto
 * path = "/howto"
 * categoryNames = []
 * folderPath = "howto"
 * selectedCategoryName = "howto"
 *
 * Example2
 * url: https://www.yazilim.vip/howto/linux
 * path = "linux"
 * categoryNames = ["linux"]
 * folderPath = "howto/linux"
 * selectedCategoryName = "linux"
 *
 * Example3
 * url: https://www.yazilim.vip/howto/linux/specific_distro
 * path = "/howto/linux/specific_distro"
 * categoryNames = ["linux", "specific_distro"]
 * folderPath = "howto/linux/specific_distro"
 * selectedCategoryName = "specific_distro"
 *
 * Example4
 * url: http://www.yazilim.vip/howto/ide/Eclipse/eclipse-shortcuts_configuration.howto
 * path = "/howto/ide/Eclipse/eclipse-shortcuts_configuration.howto"
 * categoryNames = ["ide, "Eclipse"]
 * folderPath = "howto/ide/Eclipse"
 * selectedCategoryName = "Eclipse"
 * selectedHowtoName = "eclipse-shortcuts_configuration.howto"
 */
export const parsePathAndSetContent = (rootCategory: Category | undefined, path: string): ParsedUrl => {
    const categoryNames = path.slice(1).split('/')
    const folderPath = '/' + categoryNames.join('/')
    const selectedCategoryName = categoryNames[categoryNames.length - 1]
    const rootCategorySelectedFlag: boolean = path === '/howto'
    const howtoSelectedFlag = path.endsWith('.howto') || path.endsWith('.md')
    const selectedHowtoName = howtoSelectedFlag ? categoryNames.pop() : undefined

    const parsedContent = setContent(rootCategory, categoryNames, selectedHowtoName)

    const categoryFoundFlag = !_.isUndefined(parsedContent?.selectedCategory)
    const howToFoundFlag = !_.isUndefined(parsedContent?.selectedHowto)
    return {
        categoryNames,
        folderPath,
        selectedCategoryName,
        rootCategorySelectedFlag,
        howtoSelectedFlag,
        selectedHowtoName,
        parsedContent,
        categoryFoundFlag,
        howToFoundFlag
    }
}

const setContent = (
    rootCategory: Category | undefined,
    categoryNames: string[],
    selectedHowtoName?: string | undefined
): ParsedContent | undefined => {
    let selectedCategory = rootCategory
    categoryNames.shift() // shift first category (howto), because rootCategory is not wrapped with "howto" key
    for (const cat of categoryNames) {
        selectedCategory = selectedCategory?.subCategoryList[cat]
    }

    const result: ParsedContent = {
        selectedCategory,
        selectedHowto: undefined,
        categoryHits: undefined,
        howtoHits: undefined
    }

    if (selectedHowtoName && selectedCategory?.howtoList.hasOwnProperty(selectedHowtoName)) {
        result.selectedHowto = selectedCategory.howtoList[selectedHowtoName]
    }
    return result
}
