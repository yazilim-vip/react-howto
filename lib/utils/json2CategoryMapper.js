export const json2CategoryMapper = (mockData) => {
    const categoryObj = JSON.parse(JSON.stringify(mockData));
    const objSubCategoryList = categoryObj.subCategoryList;
    const subCategoryList = {};
    Object.keys(objSubCategoryList).forEach((sc) => {
        const subCategory = json2CategoryMapper(objSubCategoryList[sc]);
        subCategoryList[subCategory.name] = subCategory;
    });
    const objHowToList = categoryObj.howtoList;
    const howtoList = {};
    Object.keys(objHowToList).forEach((ht) => {
        const howTo = {
            categoryList: objHowToList[ht].categoryList,
            label: objHowToList[ht].label,
            filePath: objHowToList[ht].filePath,
            markdownContent: objHowToList[ht].markdownContent
        };
        howtoList[howTo.label] = howTo;
    });
    return {
        name: categoryObj.name,
        subCategoryList,
        howtoList
    };
};
