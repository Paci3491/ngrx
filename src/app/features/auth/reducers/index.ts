import {createReducer, on, State} from '@ngrx/store';
import {login} from '../auth.actions';


export const initialUserName: {name: string | null} = { name: null }

export const authReducer = createReducer(
  initialUserName,
  on(login, (state, action) => {
    return {
      name: action.name
    }
  })
)
