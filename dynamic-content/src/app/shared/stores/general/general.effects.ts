import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { operationFailed, operationSucceeded } from './general.actions';
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
  } from '@angular/material/snack-bar';
  
 
@Injectable()
export class GeneralEffects {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  operationSucceeded$ = createEffect(() => this.actions$.pipe(
    ofType(operationSucceeded),
    concatMap(t => {
        this.snackbar.open(t.message, '',
            {
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
            });
        return [];
       })
    )
  );

  operationFailed$ = createEffect(() => this.actions$.pipe(
    ofType(operationFailed),
    concatMap(t => {
        this.snackbar.open(t.message, '',
            {
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
            });
        return [];
       })
    )
  );

  constructor(
    private actions$: Actions,
    private snackbar: MatSnackBar
  ) {}
}
