import { Component } from '@angular/core';
import { CoursesComponent } from './courses/courses.component';
import { HomeButtonComponent } from '../../shared/home-button/home-button.component';

@Component({
  selector: 'app-ngrx',
  imports: [CoursesComponent, HomeButtonComponent],
  templateUrl: './ngrx.component.html',
  styleUrl: './ngrx.component.scss',
})
export class NgrxComponent {}
