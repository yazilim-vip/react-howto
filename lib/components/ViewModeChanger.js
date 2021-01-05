import React from 'react';
import { faTh, faThList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import { HOWTO_VIEW_MODE_GRID_VIEW, HOWTO_VIEW_MODE_LIST_VIEW } from '../constants';
import { TooltipElement } from './TooltipElement';
export const ViewModeChanger = ({ viewMode, events }) => {
    const publishViewModeToggleEvent = () => {
        const event = events === null || events === void 0 ? void 0 : events.viewModeToggle;
        if (event) {
            event();
        }
    };
    return (React.createElement(ButtonGroup, { toggle: true, className: "float-right" },
        React.createElement(TooltipElement, { placement: "bottom", tooltipElement: "Grid View Mode" },
            React.createElement(ToggleButton, { type: "radio", variant: "secondary", name: "radio", value: viewMode === HOWTO_VIEW_MODE_GRID_VIEW, checked: viewMode === HOWTO_VIEW_MODE_GRID_VIEW, onChange: () => publishViewModeToggleEvent() },
                React.createElement(FontAwesomeIcon, { icon: faTh }))),
        React.createElement(TooltipElement, { placement: "bottom", tooltipElement: "List View Mode" },
            React.createElement(ToggleButton, { type: "radio", variant: "secondary", name: "radio", value: viewMode === HOWTO_VIEW_MODE_LIST_VIEW, checked: viewMode === HOWTO_VIEW_MODE_LIST_VIEW, onChange: () => publishViewModeToggleEvent() },
                React.createElement(FontAwesomeIcon, { icon: faThList })))));
};
ViewModeChanger.defaultProps = {
    events: undefined
};
