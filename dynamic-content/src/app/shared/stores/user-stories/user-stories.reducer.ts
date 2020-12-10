import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { storyListLoaded } from './user-stories.action';
import { UserStories, UserStoryState } from './user-stories.state';
 
export const adapter: EntityAdapter<UserStories> = createEntityAdapter<UserStories>();
 
export const initialState: UserStoryState = adapter.getInitialState();

export function successStoriesReducer(state, action) {
    return _successStoriesReducer(state, action);
}
 
const _successStoriesReducer = createReducer(
  initialState,
  on(storyListLoaded, (state, action) => onSuccessStoryLoaded(state, action)),
  
);

function onSuccessStoryLoaded(state, action) {
    return adapter.addMany(action.payload, { ...state });
}
