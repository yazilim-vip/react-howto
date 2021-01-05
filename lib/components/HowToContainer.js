import React, { useState } from 'react';
import { Alert, Container, Row, Col, FormControl, Badge } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { HOWTO_DEFAULT_VIEW_MODE, HOWTO_ITEM_TYPE_CATEGORY, HOWTO_ITEM_TYPE_HOWTO } from '../constants';
import { createSearchIndex } from '../utils/createSearchIndex';
import { parsePathAndSetContent } from '../utils/parsePathAndSetContent';
import { searchArchive } from '../utils/searchArchive';
import { FileManager } from './FileManager';
import { PathBreadcrumb } from './PathBreadcrumb';
import { ViewModeChanger } from './ViewModeChanger';
import './HowToContainer.css';
export const HowToContainer = ({ rootCategory, requestedPath, viewMode, events }) => {
    var _a, _b, _c;
    const [searchResult, setSearchResult] = useState(null);
    const searchIndex = createSearchIndex(rootCategory);
    const initialViewMode = viewMode || HOWTO_DEFAULT_VIEW_MODE;
    const parsedUrl = parsePathAndSetContent(rootCategory, requestedPath);
    const publishItemSelectEvent = (type, path) => {
        const itemSelectedEvent = events === null || events === void 0 ? void 0 : events.itemSelected;
        if (itemSelectedEvent) {
            itemSelectedEvent(type, path);
        }
    };
    const showError = (errMsg) => (React.createElement(Container, null,
        React.createElement(Alert, { key: 1, variant: "danger" }, errMsg)));
    if (!parsedUrl.categoryFoundFlag) {
        const beutifiedPath = parsedUrl.folderPath.replace('/howto/', '');
        return showError(React.createElement("div", null,
            "Category ",
            React.createElement("b", null, beutifiedPath + ' '),
            "not found in path.",
            React.createElement("br", null),
            React.createElement("div", { onClick: () => publishItemSelectEvent(HOWTO_ITEM_TYPE_CATEGORY, '/howto') }, "Go to root directory")));
    }
    const selectedCategory = (_a = parsedUrl === null || parsedUrl === void 0 ? void 0 : parsedUrl.parsedContent) === null || _a === void 0 ? void 0 : _a.selectedCategory;
    const getFileMagnerCategoryItemList = () => {
        if (!selectedCategory) {
            return [];
        }
        const categoryList = selectedCategory.subCategoryList;
        return Object.keys(categoryList).map((catName) => {
            const category = categoryList[catName];
            return {
                name: category.name,
                path: `${parsedUrl.folderPath}/${category.name}`,
                type: HOWTO_ITEM_TYPE_CATEGORY
            };
        });
    };
    const getFileMagnerHowToItemList = () => {
        if (!selectedCategory) {
            return [];
        }
        const howToList = selectedCategory.howtoList;
        return Object.keys(howToList).map((howToName) => {
            const howTo = howToList[howToName];
            return {
                name: howTo.label,
                path: `${parsedUrl.folderPath}/${howTo.label}`,
                type: HOWTO_ITEM_TYPE_HOWTO
            };
        });
    };
    const pathBreadcrumElements = parsedUrl.categoryNames;
    if (parsedUrl.selectedHowtoName) {
        pathBreadcrumElements.push(parsedUrl.selectedHowtoName);
    }
    return (React.createElement("div", null,
        React.createElement(Row, null,
            React.createElement(Col, { md: "7" },
                React.createElement(PathBreadcrumb, { items: pathBreadcrumElements, events: events }),
                searchResult !== null && (React.createElement("div", { className: "search-result-div" },
                    React.createElement("span", { className: "mr-3" }, "Search Result for :"),
                    React.createElement(Badge, { pill: true, variant: "dark" }, searchResult.query)))),
            React.createElement(Col, { md: "2", sm: "3", className: "mb-2 mb-sm-0" },
                React.createElement("div", { className: "d-flex bd-highlight mb-3" },
                    React.createElement("div", { className: "ml-auto mr-4" }),
                    !parsedUrl.howtoSelectedFlag && React.createElement(ViewModeChanger, { viewMode: initialViewMode, events: events }))),
            React.createElement(Col, { md: "3", sm: "9" },
                React.createElement(FormControl, { type: "search", placeholder: "Search...", "aria-label": "Search", value: searchResult ? searchResult.query : '', onChange: (event) => {
                        const searchQuery = event.target.value;
                        if (searchQuery) {
                            const searchResult = searchArchive(searchIndex, searchQuery);
                            setSearchResult(searchResult);
                        }
                        else {
                            setSearchResult(null);
                        }
                    } }))),
        React.createElement("hr", null),
        !searchResult && parsedUrl.howtoSelectedFlag && !parsedUrl.howToFoundFlag && (React.createElement(Alert, { key: 1, variant: "danger" },
            React.createElement("b", null,
                "Whopps ",
                parsedUrl.selectedHowtoName),
            " not found in ",
            React.createElement("b", null, selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.name),
            " folder.",
            React.createElement("br", null))),
        !searchResult && parsedUrl.howToFoundFlag ? (React.createElement(ReactMarkdown, { source: (_c = (_b = parsedUrl === null || parsedUrl === void 0 ? void 0 : parsedUrl.parsedContent) === null || _b === void 0 ? void 0 : _b.selectedHowto) === null || _c === void 0 ? void 0 : _c.markdownContent })) : (React.createElement(FileManager, { events: events, viewMode: initialViewMode, categoryList: searchResult ? searchResult.categoryHits : getFileMagnerCategoryItemList(), howToList: searchResult ? searchResult.howtoHits : getFileMagnerHowToItemList() }))));
};
