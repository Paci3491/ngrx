import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';

@Injectable()
export class AuthEffects {


  constructor(private actions$: Actions) {
    actions$.subscribe(actions => {

    })
  }
}
