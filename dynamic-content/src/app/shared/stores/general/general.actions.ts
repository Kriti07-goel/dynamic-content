import { createAction, props } from '@ngrx/store';

export const operationSucceeded = createAction('[General] Operation Succeeded', props<{ message: string }>());
export const operationFailed = createAction('[General] Operation Failed', props<{ message: string }>());
