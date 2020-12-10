import { EntityState } from '@ngrx/entity';

export class GroceryItem {
    id: number;
    name: string;
}

export interface GroceryListState extends EntityState<GroceryItem> {
    searchQuery: string;
}

