import { HOWTO_ITEM_TYPE_CATEGORY, HOWTO_ITEM_TYPE_HOWTO } from '../constants';
export const searchArchive = (searchIndex, query) => {
    if (!query) {
        return {
            query: '',
            categoryHits: null,
            howtoHits: null
        };
    }
    const hits = searchIndex.filter((o) => o.name.includes(query.toLowerCase()));
    if (!hits) {
        return {
            query: query,
            categoryHits: null,
            howtoHits: null
        };
    }
    const categoryHits = [];
    const howtoHits = [];
    hits.forEach((hit) => {
        if (hit.type === HOWTO_ITEM_TYPE_CATEGORY) {
            categoryHits.push(hit);
        }
        else if (hit.type === HOWTO_ITEM_TYPE_HOWTO) {
            howtoHits.push(hit);
        }
    });
    return {
        query: query,
        categoryHits: categoryHits,
        howtoHits: howtoHits
    };
};
