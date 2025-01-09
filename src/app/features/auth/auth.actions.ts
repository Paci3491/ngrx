import {createAction, props} from '@ngrx/store';


export const login = createAction(
  "[Login Page] User Login",
  props<{name: string}>()
)

