
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { UserStories, UserStoryState } from './user-stories.state';

export const adapter: EntityAdapter<UserStories> = createEntityAdapter<UserStories>();

// get the selectors
const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = adapter.getSelectors();


export const selectStoriesFeature = createFeatureSelector<AppState, UserStoryState>('stories')

export const selectStories = createSelector(
    selectStoriesFeature,
    (state: UserStoryState) => {
        let all = selectAll(state);
        
        return all;
    }
)

export const selectStoriesCount = createSelector(
    selectStories,
    (stories: UserStories[] ) => stories.length
  );
