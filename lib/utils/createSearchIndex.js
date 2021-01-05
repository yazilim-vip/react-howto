import { HOWTO_ITEM_TYPE_HOWTO, HOWTO_ITEM_TYPE_CATEGORY } from '../constants';
export const createSearchIndex = (rootCategory) => {
    return indexContent(rootCategory, [], '/howto');
};
const indexContent = (data, arr, path) => {
    const howtoList = data.howtoList;
    const subCategoryList = data.subCategoryList;
    Object.keys(howtoList).forEach((key) => {
        const howto = howtoList[key];
        const name = howto.label;
        const newPath = path + '/' + name;
        const howToItem = {
            path: newPath,
            type: HOWTO_ITEM_TYPE_HOWTO,
            name: name.toLowerCase()
        };
        arr.push(howToItem);
    });
    Object.keys(subCategoryList).forEach((key) => {
        const subCategory = subCategoryList[key];
        const name = subCategory.name;
        const newPath = path + '/' + name;
        const howToItem = {
            path: newPath,
            type: HOWTO_ITEM_TYPE_CATEGORY,
            name: name.toLowerCase()
        };
        arr.push(howToItem);
        indexContent(subCategory, arr, newPath);
    });
    return arr;
};
