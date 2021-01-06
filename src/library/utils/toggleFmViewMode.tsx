import { HOWTO_VIEW_MODE_GRID_VIEW, HOWTO_VIEW_MODE_LIST_VIEW, HOWTO_DEFAULT_VIEW_MODE } from '../constants'
import { FileManagerViewMode } from '../types'

export const toggleFmViewMode = (prevViewMode: FileManagerViewMode): FileManagerViewMode => {
    if (prevViewMode === HOWTO_VIEW_MODE_GRID_VIEW) {
        return HOWTO_VIEW_MODE_LIST_VIEW
    } else if (prevViewMode === HOWTO_VIEW_MODE_LIST_VIEW) {
        return HOWTO_VIEW_MODE_GRID_VIEW
    } else {
        return HOWTO_DEFAULT_VIEW_MODE
    }
}
