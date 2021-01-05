import _ from 'underscore';
export const parsePathAndSetContent = (rootCategory, path) => {
    const categoryNames = path.slice(1).split('/');
    const folderPath = '/' + categoryNames.join('/');
    const selectedCategoryName = categoryNames[categoryNames.length - 1];
    const rootCategorySelectedFlag = path === '/howto';
    const howtoSelectedFlag = path.endsWith('.howto') || path.endsWith('.md');
    const selectedHowtoName = howtoSelectedFlag ? categoryNames.pop() : undefined;
    const parsedContent = setContent(rootCategory, categoryNames, selectedHowtoName);
    const categoryFoundFlag = !_.isUndefined(parsedContent === null || parsedContent === void 0 ? void 0 : parsedContent.selectedCategory);
    const howToFoundFlag = !_.isUndefined(parsedContent === null || parsedContent === void 0 ? void 0 : parsedContent.selectedHowto);
    return {
        categoryNames,
        folderPath,
        selectedCategoryName,
        rootCategorySelectedFlag,
        howtoSelectedFlag,
        selectedHowtoName,
        parsedContent,
        categoryFoundFlag,
        howToFoundFlag
    };
};
const setContent = (rootCategory, categoryNames, selectedHowtoName) => {
    let selectedCategory = rootCategory;
    categoryNames.shift();
    for (const cat of categoryNames) {
        selectedCategory = selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.subCategoryList[cat];
    }
    const result = {
        selectedCategory,
        selectedHowto: undefined,
        categoryHits: undefined,
        howtoHits: undefined
    };
    if (selectedHowtoName && (selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.howtoList.hasOwnProperty(selectedHowtoName))) {
        result.selectedHowto = selectedCategory.howtoList[selectedHowtoName];
    }
    return result;
};
