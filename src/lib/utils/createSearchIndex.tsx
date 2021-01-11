import { Category } from '@yazilim-vip/howto-script'

import { HOWTO_ITEM_TYPE_HOWTO, HOWTO_ITEM_TYPE_CATEGORY } from '../constants'
import { HowToItem } from '../models/HowToItem'

export const createSearchIndex = (rootCategory: Category): HowToItem[] => {
    return indexContent(rootCategory, [], '/howto')
}

const indexContent = (data: Category, arr: HowToItem[], path: string): HowToItem[] => {
    const howtoList = data.howtoList
    const subCategoryList = data.subCategoryList

    Object.keys(howtoList).forEach((key) => {
        const howto = howtoList[key]
        const name = howto.label
        const newPath = path + '/' + name

        const howToItem: HowToItem = {
            path: newPath,
            type: HOWTO_ITEM_TYPE_HOWTO,
            name: name.toLowerCase()
        }
        arr.push(howToItem)
    })

    Object.keys(subCategoryList).forEach((key) => {
        const subCategory = subCategoryList[key]
        const name = subCategory.name
        const newPath = path + '/' + name

        const howToItem: HowToItem = {
            path: newPath,
            type: HOWTO_ITEM_TYPE_CATEGORY,
            name: name.toLowerCase()
        }

        arr.push(howToItem)
        indexContent(subCategory, arr, newPath)
    })

    return arr
}
