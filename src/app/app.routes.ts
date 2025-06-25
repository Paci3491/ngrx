import { Routes } from '@angular/router';
import { LoginComponent } from './features/ngrx/auth/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { NgrxComponent } from './features/ngrx/ngrx.component';
import { CoursesResolver } from './features/ngrx/courses/courses.resolver';
import { ChangeDetectionComponent } from './features/change-detection/change-detection.component';
import { DependencyInjectionComponent } from './features/dependency-injection/dependency-injection.component';
import { SignalsComponent } from './features/signals/signals.component';
import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Course: {},
};

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
    path: 'signals',
    component: SignalsComponent,
    title: 'Signals',
  },
  {
    path: 'dependency-injection',
    component: DependencyInjectionComponent,
    title: 'Dependency Injection',
  },
  {
    path: 'ngrx',
    component: NgrxComponent,
    title: 'Ngrx',
    resolve: { courses: CoursesResolver },
  },
];
