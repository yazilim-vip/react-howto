import { HOWTO_ITEM_TYPE_CATEGORY, HOWTO_ITEM_TYPE_HOWTO } from '../constants'
import { Category } from '../models/Category'
import { HowToItem } from '../models/HowToItem'

export const getFileManagerItemList = (
    selectedCategory: Category | undefined,
    folderPath: string
): { categoryItemList: HowToItem[]; howToItemList: HowToItem[] } => {
    if (!selectedCategory) {
        return {
            categoryItemList: [],
            howToItemList: []
        }
    }

    const categoryList = selectedCategory.subCategoryList
    const howToList = selectedCategory.howtoList
    return {
        categoryItemList: Object.keys(categoryList).map((catName) => {
            const category = categoryList[catName]
            return {
                name: category.name,
                path: `${folderPath}/${category.name}`,
                type: HOWTO_ITEM_TYPE_CATEGORY
            }
        }),
        howToItemList: Object.keys(howToList).map((howToName) => {
            const howTo = howToList[howToName]
            return {
                name: howTo.label,
                path: `${folderPath}/${howTo.label}`,
                type: HOWTO_ITEM_TYPE_HOWTO
            }
        })
    }
}
