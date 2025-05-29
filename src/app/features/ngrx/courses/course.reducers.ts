import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Course } from './courses.models';
import { createReducer, on } from '@ngrx/store';
import { CourseActions } from './action-types';

export interface CoursesState extends EntityState<Course> {
  allCoursesLoaded: boolean;
}

function compareCourses(c1: Course, c2: Course) {
  const diff = c1.sequenceNumber - c2.sequenceNumber;

  if (diff > 0) {
    return 1;
  } else if (diff < 0) {
    return -1;
  } else {
    return 0;
  }
}

export const adapter = createEntityAdapter<Course>({
  sortComparer: compareCourses,
});

export const initialCoursesState = adapter.getInitialState({
  allCoursesLoaded: false, // prevents additional backend calls, if courses loaded, select them only
});

export const coursesReducer = createReducer(
  initialCoursesState,
  on(CourseActions.allCoursesLoaded, (state, action) =>
    adapter.setAll(action.courses, { ...state, allCoursesLoaded: true }),
  ),
);

export const { selectAll } = adapter.getSelectors();
