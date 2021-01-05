import React, { FC } from 'react'

import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Placement } from 'react-bootstrap/esm/Overlay'

export interface TooltipElementProps {
    placement: Placement
    tooltipElement: React.ReactElement | string
    children: React.ReactElement
}
export const TooltipElement: FC<TooltipElementProps> = ({
    placement,
    tooltipElement,
    children
}: TooltipElementProps) => {
    return (
        <OverlayTrigger placement={placement} overlay={<Tooltip id="tooltip-disabled">{tooltipElement}</Tooltip>}>
            {children}
        </OverlayTrigger>
    )
}
