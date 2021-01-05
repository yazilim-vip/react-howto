import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Breadcrumb } from 'react-bootstrap';
import { HOWTO_ITEM_TYPE_CATEGORY } from '../constants';
export const PathBreadcrumb = ({ items, events }) => {
    const publishItemSelectEvent = (type, path) => {
        const itemSelectedEvent = events === null || events === void 0 ? void 0 : events.itemSelected;
        if (itemSelectedEvent) {
            itemSelectedEvent(type, path);
        }
    };
    const getLink = (index) => {
        return '/howto/' + items.slice(0, index).join('/');
    };
    const breadcrumbItems = items.map((item, index) => {
        return (React.createElement(Breadcrumb.Item, { key: item, active: index + 1 === items.length, onClick: () => publishItemSelectEvent(HOWTO_ITEM_TYPE_CATEGORY, getLink(index + 1)) }, item));
    });
    return (React.createElement(Breadcrumb, null,
        React.createElement(Breadcrumb.Item, { key: "root", onClick: () => publishItemSelectEvent(HOWTO_ITEM_TYPE_CATEGORY, '/howto') },
            React.createElement("span", null,
                React.createElement(FontAwesomeIcon, { icon: faHome }))),
        breadcrumbItems));
};
PathBreadcrumb.defaultProps = {
    events: undefined
};
