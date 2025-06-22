import { Component } from '@angular/core';
import { CoursesComponent } from './courses/courses.component';
import { HomeButtonComponent } from '../../shared/home-button/home-button.component';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-ngrx',
  imports: [CoursesComponent, HomeButtonComponent, MatTab, MatTabGroup],
  templateUrl: './ngrx.component.html',
  styleUrl: './ngrx.component.scss',
})
export class NgrxComponent {}
