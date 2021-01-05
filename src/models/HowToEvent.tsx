import { HowToItemType } from 'typings'
export interface HowToEvent {
    viewModeToggle?: () => void
    itemSelected?: (type: HowToItemType, path: string) => void
}
