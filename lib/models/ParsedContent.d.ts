import { Category } from './Category';
import { HowTo } from './HowTo';
export interface ParsedContent {
    selectedCategory: Category | undefined;
    selectedHowto: HowTo | undefined;
    categoryHits: string[] | undefined;
    howtoHits: string[] | undefined;
}
