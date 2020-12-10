import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { groceryItemAdded, groceryItemDeleted, groceryListLoaded, setSearchQuery } from './grocery-list.actions';
import { GroceryItem, GroceryListState } from './grocery-list.state';
 
export const adapter: EntityAdapter<GroceryItem> = createEntityAdapter<GroceryItem>();
 
export const initialState: GroceryListState = adapter.getInitialState({
    searchQuery: ''
});

export function groceryListReducer(state, action) {
    return _groceryListReducer(state, action);
}
 
const _groceryListReducer = createReducer(
  initialState,
  on(groceryListLoaded, (state, action) => onGroceryListLoaded(state, action)),
  on(groceryItemAdded, (state, action) => onGroceryItemAdded(state, action)),
  on(groceryItemDeleted, (state, action) => onGroceryItemDeleted(state, action)),
  on(setSearchQuery, (state, action) => onSetSearchQuery(state, action))
);

function onGroceryListLoaded(state, action) {
    return adapter.addMany(action.payload, { ...state });
}
function onGroceryItemAdded(state, action) {
    return adapter.addOne(action.payload, { ...state });
}
function onGroceryItemDeleted(state, action) {
    return adapter.removeOne(action.id, { ...state });
}
function onSetSearchQuery(state, action) {
    return { ...state, searchQuery: action.query };
}