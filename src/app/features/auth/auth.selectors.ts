import {createSelector} from '@ngrx/store';


export const getName = createSelector(
  (state: any) => state["auth"],
  (auth) => auth.name
)
