import { Component } from '@angular/core';
import { CoursesComponent } from './courses/courses.component';
import { HomeButtonComponent } from '../../shared/home-button/home-button.component';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';

@Component({
  selector: 'app-ngrx',
  imports: [
    CoursesComponent,
    HomeButtonComponent,
    MatTab,
    MatTabGroup,
    MatCellDef,
    MatTable,
    MatHeaderCell,
    MatColumnDef,
    MatHeaderCellDef,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
  ],
  templateUrl: './ngrx.component.html',
  styleUrl: './ngrx.component.scss',
})
export class NgrxComponent {
  displayedColumns: string[] = ['feature', 'entity', 'data'];
  dataSource = [
    { feature: 'Setup', entity: 'Manual', data: 'Mostly config-based' },
    { feature: 'Flexibility', entity: 'High', data: 'Moderate' },
    { feature: 'Boilerplate', entity: 'More', data: 'Less' },
    {
      feature: 'Use Case',
      entity: 'Complex apps, custom workflows',
      data: 'Standard REST CRUD',
    },
    {
      feature: 'Code Control',
      entity: 'Full',
      data: 'Limited (auto-generated logic)',
    },
    { feature: 'Learning Curve', entity: 'Medium', data: 'Low (for CRUD)' },
    {
      feature: 'Based On',
      entity: 'NgRx Store + Entity',
      data: 'Built on top of NgRx Entity',
    },
  ];
}
