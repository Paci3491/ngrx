import {createAction, props} from '@ngrx/store';


export const login = createAction(
  "[Login Page] User Login",
  props<{name: string}>()
)

export const logout = createAction(
  "[Login Page] User Logout",
)
