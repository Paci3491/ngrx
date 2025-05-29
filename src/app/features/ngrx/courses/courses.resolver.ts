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

@Injectable({ providedIn: 'root' })
export class CoursesResolver implements Resolve<any> {
  private store = inject(Store);

  courses = {
    courses: [
      { id: 1, courseName: 'Oida', sequenceNumber: 5 },
      { id: 2, courseName: 'Madonna Mia', sequenceNumber: 3 },
      { id: 3, courseName: 'Hearst', sequenceNumber: 4 },
      { id: 4, courseName: 'Brudi', sequenceNumber: 2 },
      { id: 5, courseName: 'NGRX', sequenceNumber: 1 },
    ],
  };

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<any> {
    return this.store.pipe(
      select(areCoursesLoaded),
      tap((coursesLoaded) => {
        if (!coursesLoaded) {
          this.store.dispatch(allCoursesLoaded(this.courses));
        }
      }),
      filter((coursesLoaded) => coursesLoaded),
      first(),
    );
  }
}
