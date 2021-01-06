import { Placement } from 'react-bootstrap/esm/Overlay'

import {
    HOWTO_ITEM_TYPE_HOWTO,
    HOWTO_ITEM_TYPE_CATEGORY,
    HOWTO_VIEW_MODE_GRID_VIEW,
    HOWTO_VIEW_MODE_LIST_VIEW
} from './constants'
import { Category } from './models/Category'
import { HowToEvent } from './models/HowToEvent'
import { HowToItem } from './models/HowToItem'

export type HowToItemType = typeof HOWTO_ITEM_TYPE_HOWTO | typeof HOWTO_ITEM_TYPE_CATEGORY
export type FileManagerViewMode = typeof HOWTO_VIEW_MODE_LIST_VIEW | typeof HOWTO_VIEW_MODE_GRID_VIEW

export type HowToComponentProps = {
    events?: HowToEvent
}

export type FileManagerProps = HowToComponentProps & {
    viewMode: FileManagerViewMode
    categoryList: Array<HowToItem> | null
    howToList: Array<HowToItem> | null
}

export type HowToContainerProps = HowToComponentProps & {
    rootCategory: Category
    requestedPath: string
    viewMode: FileManagerViewMode | undefined
}
export type PathBreadcrumbProps = HowToComponentProps & {
    items: string[]
}

export type TooltipElementProps = HowToComponentProps & {
    placement: Placement
    tooltipElement: React.ReactElement | string
    children: React.ReactElement
}

export type ViewModeChangerProps = HowToComponentProps & {
    viewMode: FileManagerViewMode
}
