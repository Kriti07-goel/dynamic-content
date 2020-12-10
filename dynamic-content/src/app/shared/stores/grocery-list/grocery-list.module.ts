import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GroceryListEffects } from './grocery-list.effects';
import { groceryListReducer } from './grocery-list.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature('groceries', groceryListReducer),
        EffectsModule.forFeature([ GroceryListEffects])
    ]
})
export class GroceryListModule {

}