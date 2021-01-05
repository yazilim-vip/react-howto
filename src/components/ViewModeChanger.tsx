import React, { FC } from 'react'

import { faTh, faThList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonGroup, ToggleButton } from 'react-bootstrap'

import { HOWTO_VIEW_MODE_GRID_VIEW, HOWTO_VIEW_MODE_LIST_VIEW } from '../constants'
import { FileManagerViewMode, HowToComponentProps } from '../types'
import { TooltipElement } from './TooltipElement'

export interface ViewModeChangerProps extends HowToComponentProps {
    viewMode: FileManagerViewMode
}

export const ViewModeChanger: FC<ViewModeChangerProps> = ({ viewMode, events }: ViewModeChangerProps) => {
    const publishViewModeToggleEvent = () => {
        const event = events?.viewModeToggle
        if (event) {
            event()
        }
    }
    return (
        <ButtonGroup toggle className="float-right">
            <TooltipElement placement="bottom" tooltipElement="Grid View Mode">
                <ToggleButton
                    type="radio"
                    variant="secondary"
                    name="radio"
                    value={viewMode === HOWTO_VIEW_MODE_GRID_VIEW}
                    checked={viewMode === HOWTO_VIEW_MODE_GRID_VIEW}
                    onChange={() => publishViewModeToggleEvent()}
                >
                    <FontAwesomeIcon icon={faTh} />
                </ToggleButton>
            </TooltipElement>
            <TooltipElement placement="bottom" tooltipElement="List View Mode">
                <ToggleButton
                    type="radio"
                    variant="secondary"
                    name="radio"
                    value={viewMode === HOWTO_VIEW_MODE_LIST_VIEW}
                    checked={viewMode === HOWTO_VIEW_MODE_LIST_VIEW}
                    onChange={() => publishViewModeToggleEvent()}
                >
                    <FontAwesomeIcon icon={faThList} />
                </ToggleButton>
            </TooltipElement>
        </ButtonGroup>
    )
}

ViewModeChanger.defaultProps = {
    events: undefined
}
