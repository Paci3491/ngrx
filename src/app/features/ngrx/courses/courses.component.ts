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
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CourseEditDialogComponent } from './course-edit-dialog/course-edit-dialog.component';
import { Observable } from 'rxjs';
import { Lesson } from './lesson';

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
    MatIconButton,
    MatIcon,
    MatButton,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  private store = inject(Store<any>);
  private dialog = inject(MatDialog);
  // private coursesEntityService = inject(CourseEntityService);
  // private lessonEntityService = inject(LessonEntityService);

  courses: Course[] = [];
  lessons$: Observable<Lesson[]>;
  dataSource: MatTableDataSource<Course>;
  displayedColumns: string[] = ['id', 'name', 'actions'];

  ngOnInit() {
    this.store.select(selectAllCourses).subscribe((data) => {
      this.courses = data;
      this.dataSource = new MatTableDataSource<Course>(data);
    });

    // this.lessonEntityService.getWithQuery({
    //   courseId: 2,
    //   pageNumber: 2,
    //   pageSize: 6,
    // });
    //
    // this.lessons$ = this.lessonEntityService.entities$;
  }

  openDialog(course: Course) {
    const dialogRef = this.dialog.open(CourseEditDialogComponent, {
      data: { course },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  entityServiceUpdate() {
    // this.coursesEntityService.update({
    //   id: 2,
    //   courseName: 'Madonna Mia',
    //   sequenceNumber: 3,
    // });
  }
}
