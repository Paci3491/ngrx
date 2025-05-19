import {
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authReducer, metaReducers } from './features/auth/reducers';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './features/auth/auth.effects';
import {
  provideRouterStore,
  routerReducer,
  RouterState,
} from '@ngrx/router-store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideEffects([AuthEffects]),
    provideStore(
      {
        auth: authReducer,
        router: routerReducer,
      },
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictActionSerializability: true,
          strictStateImmutability: true,
          strictStateSerializability: true,
        },
        metaReducers: metaReducers,
      },
    ), //{ metaReducers }
    provideRouterStore({
      stateKey: 'router',
      routerState: RouterState.Minimal,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideAnimationsAsync(),
  ],
};
