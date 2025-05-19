import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { first, Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadAllCourses } from './course.actions';

@Injectable({ providedIn: 'root' })
export class CoursesResolver implements Resolve<any> {
  private store = inject(Store);

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<any> {
    return this.store.pipe(
      tap(() => this.store.dispatch(loadAllCourses())),
      first(),
    );
  }
}
