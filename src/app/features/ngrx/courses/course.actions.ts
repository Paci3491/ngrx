import { createAction, props } from '@ngrx/store';
import { Course } from '../../../services/database';

export const loadAllCourses = createAction(
  '[Course Resolver] Load All Courses',
);

export const allCoursesLoaded = createAction(
  '[Load Courses Effect] All Courses Loaded',
  props<{ courses: Course[] }>(),
);
