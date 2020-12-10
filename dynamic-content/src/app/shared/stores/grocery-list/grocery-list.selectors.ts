import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { GroceryItem, GroceryListState } from './grocery-list.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const adapter: EntityAdapter<GroceryItem> = createEntityAdapter<GroceryItem>();

// get the selectors
const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = adapter.getSelectors();


export const selectGroceriesFeature = createFeatureSelector<AppState, GroceryListState>('groceries')

export const selectGroceries = createSelector(
    selectGroceriesFeature,
    (state: GroceryListState) => {
        let all = selectAll(state);
        if (state.searchQuery) {
            all = all.filter(t => t.name.indexOf(state.searchQuery) >= 0);
        }
        return all;
    }
)

export const selectGroceriesCount = createSelector(
    selectGroceries,
    (groceries: GroceryItem[] ) => groceries.length
  );
