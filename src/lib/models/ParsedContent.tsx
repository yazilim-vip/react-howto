import { Category, HowTo } from '@yazilim-vip/howto-script'

export interface ParsedContent {
    selectedCategory: Category | undefined
    selectedHowto: HowTo | undefined
    categoryHits: string[] | undefined
    howtoHits: string[] | undefined
}
