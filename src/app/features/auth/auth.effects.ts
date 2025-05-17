import { inject, Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        tap((action) => {
          if (action.type === '[Login Page] User Login') {
            // @ts-ignore
            localStorage.setItem('name', JSON.stringify(action['name']));
          }
        }),
      ),
    { dispatch: false },
  );
}
