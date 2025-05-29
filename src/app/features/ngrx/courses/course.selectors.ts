import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCourses from './course.reducers';
import { CoursesState } from './course.reducers';

export const selectCoursesState =
  createFeatureSelector<CoursesState>('courses');

export const selectAllCourses = createSelector(
  selectCoursesState,
  fromCourses.selectAll,
);

export const areCoursesLoaded = createSelector(
  selectCoursesState,
  (state) => state.allCoursesLoaded,
);
