import {
  ActionReducer,
  createReducer,
  INIT,
  MetaReducer,
  on,
} from '@ngrx/store';
import { login, logout } from '../auth.actions';
import { isDevMode } from '@angular/core';

// meta reducer is something like interceptor, allows you to approach state and action just before it is dispatched. Then passes it along
export const metaReducers: MetaReducer<any>[] = isDevMode() ? [logger] : [];

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if (action.type === INIT) {
      const storageValue = localStorage.getItem('name');
      if (storageValue) {
        try {
          const parsedVal = JSON.parse(storageValue);
          return { name: parsedVal };
        } catch {
          // fallback to default state if parsing fails
          return state;
        }
      }
    }

    return reducer(state, action);
  };
}

export const initialUserName: { name: string | null } = { name: null };

export const authReducer = createReducer(
  initialUserName,
  on(login, (state, action) => {
    return {
      name: action.name,
    };
  }),

  on(logout, (state, action) => {
    return {
      name: '',
    };
  }),
);
