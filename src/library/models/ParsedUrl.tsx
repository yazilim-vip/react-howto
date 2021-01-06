import { ParsedContent } from './ParsedContent'

export interface ParsedUrl {
    folderPath: string
    categoryNames: string[]
    selectedCategoryName: string
    selectedHowtoName: string | undefined
    howtoSelectedFlag: boolean
    rootCategorySelectedFlag: boolean
    parsedContent: ParsedContent | undefined
    categoryFoundFlag: boolean
    howToFoundFlag: boolean
}
