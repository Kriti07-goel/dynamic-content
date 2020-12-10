import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, concatMap } from 'rxjs/operators';
import { API_BASE_URL } from '../../view-models/config/api.config';
import { operationFailed, operationSucceeded } from '../general/general.actions';
import { UserStories } from './user-stories.state';
import { loadSuccessStory, storyListLoaded } from './user-stories.action';

 
@Injectable()
export class UserStoriesEffects {
  loadSuccessStory$ = createEffect(() => this.actions$.pipe(
    ofType(loadSuccessStory),
    mergeMap(() => this.httpClient.get<UserStories[]>(`${this.baseUrl}/success-story`)
      .pipe(
        map(list => storyListLoaded({ payload: list })),
        catchError(() => of(operationFailed({ message: 'Failed to load grocery list!'})))
      ))
    )
  );
  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    @Inject(API_BASE_URL) private baseUrl: string
  ) {}
}