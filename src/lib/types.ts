import { Placement } from 'react-bootstrap/esm/Overlay'

import {
    HOWTO_ITEM_TYPE_HOWTO,
    HOWTO_ITEM_TYPE_CATEGORY,
    HOWTO_VIEW_MODE_GRID_VIEW,
    HOWTO_VIEW_MODE_LIST_VIEW
} from './constants'
import { Category } from './models/Category'
import { HowToItem } from './models/HowToItem'

export type HowToItemType = typeof HOWTO_ITEM_TYPE_HOWTO | typeof HOWTO_ITEM_TYPE_CATEGORY
export type FileManagerViewMode = typeof HOWTO_VIEW_MODE_LIST_VIEW | typeof HOWTO_VIEW_MODE_GRID_VIEW

export type ViewModeToggleEvent = () => void
export type ItemSelectedEvent = (type: HowToItemType, path: string) => void
export type SearchEvent = (query: string) => void

export type FileManagerProps = {
    viewMode: FileManagerViewMode
    categoryList?: HowToItem[]
    howToList?: HowToItem[]
    itemList?: HowToItem[]
    itemSelectedEventHandler: ItemSelectedEvent
}

export type HowToContainerProps = {
    rootCategory: Category
    requestedPath: string
    viewMode: FileManagerViewMode
    events: {
        itemSelectEventHandler: ItemSelectedEvent
        viewModeToggleEventHandler?: ViewModeToggleEvent
        searchEventHandler?: SearchEvent
    }
}
export type PathBreadcrumbProps = {
    items: string[]
    itemSelectEventHandler: ItemSelectedEvent
}

export type TooltipElementProps = {
    placement: Placement
    tooltipElement: React.ReactElement | string
    children: React.ReactElement
}

export type ViewModeChangerProps = {
    viewMode: FileManagerViewMode
    viewModeToggleEventHandler: ViewModeToggleEvent
}
