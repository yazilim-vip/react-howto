/// <reference types="react" />
import { Placement } from 'react-bootstrap/esm/Overlay';
import { HOWTO_ITEM_TYPE_HOWTO, HOWTO_ITEM_TYPE_CATEGORY, HOWTO_VIEW_MODE_GRID_VIEW, HOWTO_VIEW_MODE_LIST_VIEW } from './constants';
import { Category } from './models/Category';
import { HowToEvent } from './models/HowToEvent';
import { HowToItem } from './models/HowToItem';
export declare type HowToItemType = typeof HOWTO_ITEM_TYPE_HOWTO | typeof HOWTO_ITEM_TYPE_CATEGORY;
export declare type FileManagerViewMode = typeof HOWTO_VIEW_MODE_LIST_VIEW | typeof HOWTO_VIEW_MODE_GRID_VIEW;
export declare type HowToComponentProps = {
    events?: HowToEvent;
};
export declare type FileManagerProps = HowToComponentProps & {
    viewMode: FileManagerViewMode;
    categoryList: Array<HowToItem> | null;
    howToList: Array<HowToItem> | null;
};
export declare type HowToContainerProps = HowToComponentProps & {
    rootCategory: Category;
    requestedPath: string;
    viewMode: FileManagerViewMode | undefined;
};
export declare type PathBreadcrumbProps = HowToComponentProps & {
    items: string[];
};
export declare type TooltipElementProps = HowToComponentProps & {
    placement: Placement;
    tooltipElement: React.ReactElement | string;
    children: React.ReactElement;
};
export declare type ViewModeChangerProps = HowToComponentProps & {
    viewMode: FileManagerViewMode;
};
