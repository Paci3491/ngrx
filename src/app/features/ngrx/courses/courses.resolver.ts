import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { filter, first, Observable, tap } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { allCoursesLoaded } from './course.actions';
import { areCoursesLoaded } from './course.selectors';
import { courses } from '../../../services/database';

@Injectable({ providedIn: 'root' })
export class CoursesResolver implements Resolve<any> {
  private store = inject(Store);

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<any> {
    return this.store.pipe(
      select(areCoursesLoaded),
      tap((coursesLoaded) => {
        if (!coursesLoaded) {
          this.store.dispatch(allCoursesLoaded(courses));
        }
      }),
      filter((coursesLoaded) => coursesLoaded),
      first(),
    );
  }
}
