import React, { FC } from 'react'

import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { TooltipElementProps } from 'typings'

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
