import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { NgrxComponent } from './features/ngrx/ngrx.component';
import { CoursesResolver } from './features/ngrx/courses/courses.resolver';
import { ChangeDetectionComponent } from './features/change-detection/change-detection.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  {
    path: 'change-detection',
    component: ChangeDetectionComponent,
    title: 'Change Detection',
  },
  {
    path: 'ngrx',
    component: NgrxComponent,
    title: 'Ngrx',
    resolve: { courses: CoursesResolver },
  },
];
