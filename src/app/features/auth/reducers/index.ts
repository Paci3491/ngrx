import { createReducer, on } from '@ngrx/store';
import { login, logout } from '../auth.actions';

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
