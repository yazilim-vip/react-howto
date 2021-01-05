import {
    HOWTO_ITEM_TYPE_HOWTO,
    HOWTO_ITEM_TYPE_CATEGORY,
    HOWTO_VIEW_MODE_GRID_VIEW,
    HOWTO_VIEW_MODE_LIST_VIEW
} from './constants'
import { HowToEvent } from './models/HowToEvent'

export type HowToItemType = typeof HOWTO_ITEM_TYPE_HOWTO | typeof HOWTO_ITEM_TYPE_CATEGORY
export type FileManagerViewMode = typeof HOWTO_VIEW_MODE_LIST_VIEW | typeof HOWTO_VIEW_MODE_GRID_VIEW

export interface HowToComponentProps {
    events?: HowToEvent
}
