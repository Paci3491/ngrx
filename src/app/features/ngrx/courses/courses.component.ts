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
import { FormsModule } from '@angular/forms';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CourseEditDialogComponent } from './course-edit-dialog/course-edit-dialog.component';

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
    FormsModule,
    MatTabGroup,
    MatTab,
    MatIconButton,
    MatIcon,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  private store = inject(Store<any>);
  private dialog = inject(MatDialog);

  courses: Course[] = [];
  dataSource: MatTableDataSource<Course>;
  displayedColumns: string[] = ['id', 'name', 'actions'];

  ngOnInit() {
    this.store.select(selectAllCourses).subscribe((data) => {
      this.courses = data;
      this.dataSource = new MatTableDataSource<Course>(data);
    });
  }

  openDialog(course: Course) {
    const dialogRef = this.dialog.open(CourseEditDialogComponent, {
      data: { course },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
