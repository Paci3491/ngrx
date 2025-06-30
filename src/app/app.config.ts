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
import { authReducer, metaReducers } from './features/ngrx/auth/reducers';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './features/ngrx/auth/auth.effects';
import {
  provideRouterStore,
  routerReducer,
  RouterState,
} from '@ngrx/router-store';
import { coursesReducer } from './features/ngrx/courses/course.reducers';
import { EntityMetadataMap, provideEntityData } from '@ngrx/data';
import { compareLessons } from './features/ngrx/courses/lesson';
import { LessonEntityService } from './features/ngrx/courses/lesson-entity.service';
import { CourseEntityService } from './features/ngrx/courses/course-entity.service';

const entityMetadata: EntityMetadataMap = {
  Course: {},
  Lesson: {
    sortComparer: compareLessons,
  },
};

export const entityConfig = {
  entityMetadata,
};

export const appConfig: ApplicationConfig = {
  providers: [
    LessonEntityService,
    CourseEntityService,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideEntityData(entityConfig), // comment if entity ngrx
    provideEffects([AuthEffects]),
    provideStore(
      {
        auth: authReducer,
        courses: coursesReducer,
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
    ),
    provideRouterStore({
      stateKey: 'router',
      routerState: RouterState.Minimal,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideAnimationsAsync(),
  ],
};
