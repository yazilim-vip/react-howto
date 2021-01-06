import { HowToItem } from './HowToItem'

export interface SearchResult {
    query: string
    categoryHits: HowToItem[] | null
    howtoHits: HowToItem[] | null
}
