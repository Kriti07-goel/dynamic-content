import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, concatMap } from 'rxjs/operators';
import { API_BASE_URL } from '../../view-models/config/api.config';
import { addGroceryItem, deleteGroceryItem, groceryItemAdded, groceryItemDeleted, groceryListLoaded, loadGroceryList } from './grocery-list.actions';
import { operationFailed, operationSucceeded } from '../general/general.actions';
import { GroceryItem } from './grocery-list.state';

 
@Injectable()
export class GroceryListEffects {
 
  loadGroceryList$ = createEffect(() => this.actions$.pipe(
    ofType(loadGroceryList),
    mergeMap(() => this.httpClient.get<GroceryItem[]>(`${this.baseUrl}/grocery-list`)
      .pipe(
        map(list => groceryListLoaded({ payload: list })),
        catchError(() => of(operationFailed({ message: 'Failed to load grocery list!'})))
      ))
    )
  );

  addGroceryItem$ = createEffect(() => this.actions$.pipe(
      ofType(addGroceryItem),
      mergeMap((action) => this.httpClient.post<GroceryItem>(`${this.baseUrl}/grocery-list`, { name: action.name })
        .pipe(
            concatMap(item => [groceryItemAdded({ payload: item }), operationSucceeded({ message: 'Grocery item added'})]),
            catchError(() => of(operationFailed({ message: 'Failed to add grocery item!'})))
        ))
      )
  );

  
  deleteGroceryItem$ = createEffect(() => this.actions$.pipe(
    ofType(deleteGroceryItem),
    mergeMap((action) => this.httpClient.delete<GroceryItem>(`${this.baseUrl}/grocery-list/${action.id}`)
      .pipe(
          concatMap(item => [groceryItemDeleted({ id: action.id }), operationSucceeded({ message: 'Grocery item deleted'})]),
          catchError(() => of(operationFailed({ message: 'Failed to delete grocery item!'})))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    @Inject(API_BASE_URL) private baseUrl: string
  ) {}
}