import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserStoriesEffects } from './user-stories.effects';
import { successStoriesReducer } from './user-stories.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature('stories', successStoriesReducer),
        EffectsModule.forFeature([ UserStoriesEffects])
    ]
})
export class SuccessStoryModule {

}