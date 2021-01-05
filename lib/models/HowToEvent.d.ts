import { HowToItemType } from '../types';
export interface HowToEvent {
    viewModeToggle?: () => void;
    itemSelected?: (type: HowToItemType, path: string) => void;
}
