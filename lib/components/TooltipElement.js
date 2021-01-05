import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
export const TooltipElement = ({ placement, tooltipElement, children }) => {
    return (React.createElement(OverlayTrigger, { placement: placement, overlay: React.createElement(Tooltip, { id: "tooltip-disabled" }, tooltipElement) }, children));
};
