import { createAction, props } from '@ngrx/store';
import { UserStories } from './user-stories.state';


export const loadSuccessStory = createAction('[Success Story] load success story list');
export const storyListLoaded = createAction('[Success Story] success story list loaded', props<{ payload: UserStories[]}>());



