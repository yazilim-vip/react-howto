import { HOWTO_ITEM_TYPE_CATEGORY, HOWTO_ITEM_TYPE_HOWTO } from '../constants'
import { Category } from '../models/Category'
import { HowToItem } from '../models/HowToItem'

export const getFileManagerItemList = (selectedCategory: Category | undefined, folderPath: string): HowToItem[] => {
    if (!selectedCategory) {
        return []
    }

    const result: HowToItem[] = []

    const categoryList = selectedCategory.subCategoryList
    Object.keys(categoryList).forEach((catName) => {
        result.push({
            name: categoryList[catName].name,
            path: `${folderPath}/${categoryList[catName].name}`,
            type: HOWTO_ITEM_TYPE_CATEGORY
        })
    })

    const howToList = selectedCategory.howtoList
    Object.keys(howToList).forEach((howToName) => {
        result.push({
            name: howToList[howToName].label,
            path: `${folderPath}/${howToList[howToName].label}`,
            type: HOWTO_ITEM_TYPE_HOWTO
        })
    })

    return result
}
