import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAuthState = createFeatureSelector<{ name: string }>('auth');

export const getUserNickName = createSelector(
  selectAuthState,
  (auth) => auth.name,
);
