import { HowToItem } from '../models/HowToItem'
import { SearchResult } from '../models/SearchResult'

export const getSearchResultItemList = (searchResult: SearchResult | undefined): HowToItem[] => {
    if (!searchResult) {
        return []
    }

    const result: HowToItem[] = []
    searchResult.categoryHits?.forEach((hit) => {
        result.push(hit)
    })

    searchResult.howtoHits?.forEach((hit) => {
        result.push(hit)
    })
    return result
}
