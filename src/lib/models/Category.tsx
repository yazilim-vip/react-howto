import { HowTo } from './HowTo'

export interface Category {
    name: string
    subCategoryList: { [s: string]: Category }
    howtoList: { [s: string]: HowTo }
}
