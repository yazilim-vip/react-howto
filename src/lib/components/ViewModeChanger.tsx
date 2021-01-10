import React, { FC } from 'react'

import { faTh, faThList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonGroup, ToggleButton } from 'react-bootstrap'

import { HOWTO_VIEW_MODE_GRID_VIEW, HOWTO_VIEW_MODE_LIST_VIEW } from '../constants'
import { ViewModeChangerProps } from '../types'
import { TooltipElement } from './TooltipElement'

export const ViewModeChanger: FC<ViewModeChangerProps> = ({
    viewMode,
    viewModeToggleEventHandler
}: ViewModeChangerProps) => {
    return (
        <ButtonGroup toggle className="float-right">
            <TooltipElement placement="bottom" tooltipElement="Grid View Mode">
                <ToggleButton
                    type="radio"
                    variant="secondary"
                    name="radio"
                    value={viewMode === HOWTO_VIEW_MODE_GRID_VIEW ? 'true' : 'false'}
                    checked={viewMode === HOWTO_VIEW_MODE_GRID_VIEW}
                    onChange={() => viewModeToggleEventHandler()}
                >
                    <FontAwesomeIcon icon={faTh} />
                </ToggleButton>
            </TooltipElement>
            <TooltipElement placement="bottom" tooltipElement="List View Mode">
                <ToggleButton
                    type="radio"
                    variant="secondary"
                    name="radio"
                    value={viewMode === HOWTO_VIEW_MODE_LIST_VIEW ? 'true' : 'false'}
                    checked={viewMode === HOWTO_VIEW_MODE_LIST_VIEW}
                    onChange={() => viewModeToggleEventHandler()}
                >
                    <FontAwesomeIcon icon={faThList} />
                </ToggleButton>
            </TooltipElement>
        </ButtonGroup>
    )
}
