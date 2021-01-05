import React from 'react';
import { faFileAlt, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListGroup, Container, Col, Row } from 'react-bootstrap';
import { HOWTO_ITEM_TYPE_CATEGORY, HOWTO_VIEW_MODE_GRID_VIEW, HOWTO_VIEW_MODE_LIST_VIEW } from '../constants';
import { TooltipElement } from './TooltipElement';
export const FileManager = ({ viewMode, categoryList, howToList, events }) => {
    const publishItemSelectEvent = (type, path) => {
        const itemSelectedEvent = events === null || events === void 0 ? void 0 : events.itemSelected;
        if (itemSelectedEvent) {
            itemSelectedEvent(type, path);
        }
    };
    const renderItems = (items) => {
        if (!items) {
            return null;
        }
        return Object.keys(items).map((value, index) => {
            const howToItem = items[index];
            const howToItemType = howToItem.type;
            const icon = howToItemType === HOWTO_ITEM_TYPE_CATEGORY ? faFolder : faFileAlt;
            const color = howToItemType === HOWTO_ITEM_TYPE_CATEGORY ? '#50a4d4' : '#494d52';
            const name = howToItem.name;
            const link = howToItem.path;
            if (viewMode === HOWTO_VIEW_MODE_LIST_VIEW) {
                return (React.createElement("div", { className: "file-manager-item", key: link, onClick: () => {
                        publishItemSelectEvent(howToItemType, link);
                    } },
                    React.createElement(ListGroup.Item, null,
                        React.createElement(FontAwesomeIcon, { icon: icon, className: "mr-3", color: color }),
                        name)));
            }
            else if (viewMode === HOWTO_VIEW_MODE_GRID_VIEW) {
                return (React.createElement(Col, { xs: 4, sm: 3, md: 3, lg: 2, className: "py-4 text-center", key: link },
                    React.createElement(TooltipElement, { placement: "bottom-end", tooltipElement: link },
                        React.createElement("div", { className: "file-manager-item", onClick: () => {
                                publishItemSelectEvent(howToItemType, link);
                            } },
                            React.createElement(FontAwesomeIcon, { icon: icon, className: "pb-1", size: "4x", color: color }),
                            React.createElement("br", null),
                            name))));
            }
            else {
                return null;
            }
        });
    };
    const categoryItems = (categoryList && renderItems(categoryList)) || undefined;
    const howToItems = (howToList && renderItems(howToList)) || undefined;
    return (React.createElement(Container, { fluid: true },
        viewMode === HOWTO_VIEW_MODE_LIST_VIEW && (React.createElement(ListGroup, null,
            categoryItems,
            howToItems)),
        viewMode === HOWTO_VIEW_MODE_GRID_VIEW && (React.createElement(Row, null,
            categoryItems,
            howToItems))));
};
FileManager.defaultProps = {
    events: undefined
};
