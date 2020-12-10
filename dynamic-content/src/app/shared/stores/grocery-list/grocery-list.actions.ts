import { createAction, props } from '@ngrx/store';
import { GroceryItem } from './grocery-list.state';

export const loadGroceryList = createAction('[Grocery List] load grocery list');
export const groceryListLoaded = createAction('[Grocery List] grocery list loaded', props<{ payload: GroceryItem[]}>());

export const addGroceryItem = createAction('[Grocery List] Add Grocery Item', props<{ name: string }>());
export const groceryItemAdded = createAction('[Grocery List] Grocery Item Added', props<{ payload: GroceryItem }>());

export const deleteGroceryItem = createAction('[Grocery List] Delete Grocery Item', props<{id: number}>());
export const groceryItemDeleted = createAction('[Grocery List] Grocery Item Deleted', props<{id: number}>());

export const setSearchQuery = createAction('[Grocery List] Set Search Query', props<{query: string}>());


