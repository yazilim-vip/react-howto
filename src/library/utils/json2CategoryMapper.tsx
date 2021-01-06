/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Category } from '../models/Category'
import { HowTo } from '../models/HowTo'

export const json2CategoryMapper = (mockData: any): Category => {
    const categoryObj = JSON.parse(JSON.stringify(mockData))

    const objSubCategoryList = categoryObj.subCategoryList
    const subCategoryList: { [s: string]: Category } = {}
    Object.keys(objSubCategoryList).forEach((sc: any) => {
        const subCategory = json2CategoryMapper(objSubCategoryList[sc])
        subCategoryList[subCategory.name] = subCategory
    })

    const objHowToList = categoryObj.howtoList
    const howtoList: { [s: string]: HowTo } = {}
    Object.keys(objHowToList).forEach((ht: any) => {
        const howTo: HowTo = {
            categoryList: objHowToList[ht].categoryList,
            label: objHowToList[ht].label,
            filePath: objHowToList[ht].filePath,
            markdownContent: objHowToList[ht].markdownContent
        }
        howtoList[howTo.label] = howTo
    })
    return {
        name: categoryObj.name,
        subCategoryList,
        howtoList
    }
}
