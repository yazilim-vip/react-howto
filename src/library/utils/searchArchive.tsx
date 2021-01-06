import { HOWTO_ITEM_TYPE_CATEGORY, HOWTO_ITEM_TYPE_HOWTO } from '../constants'
import { HowToItem } from '../models/HowToItem'
import { SearchResult } from '../models/SearchResult'

export const searchArchive = (searchIndex: HowToItem[], query: string): SearchResult => {
    if (!query) {
        return {
            query: '',
            categoryHits: null,
            howtoHits: null
        }
    }

    const hits = searchIndex.filter((o) => o.name.includes(query.toLowerCase()))
    if (!hits) {
        return {
            query: query,
            categoryHits: null,
            howtoHits: null
        }
    }

    const categoryHits: HowToItem[] = []
    const howtoHits: HowToItem[] = []
    hits.forEach((hit: HowToItem) => {
        if (hit.type === HOWTO_ITEM_TYPE_CATEGORY) {
            categoryHits.push(hit)
        } else if (hit.type === HOWTO_ITEM_TYPE_HOWTO) {
            howtoHits.push(hit)
        }
    })

    return {
        query: query,
        categoryHits: categoryHits,
        howtoHits: howtoHits
    }
}
