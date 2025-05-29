import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Course } from './courses.models';
import { selectAllCourses } from './course.selectors';
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
  MatTableDataSource,
} from '@angular/material/table';

@Component({
  selector: 'app-courses',
  imports: [
    MatTable,
    MatHeaderCellDef,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderRow,
    MatRow,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  private store = inject(Store<any>);

  courses: Course[] = [];
  dataSource: MatTableDataSource<Course>;
  displayedColumns: string[] = ['id', 'name'];

  ngOnInit() {
    this.store.select(selectAllCourses).subscribe((data) => {
      this.courses = data;
      this.dataSource = new MatTableDataSource<Course>(data);
    });
  }
}
