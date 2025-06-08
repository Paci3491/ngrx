import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-course-edit-dialog',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogTitle,
    MatDialogClose,
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
  ],
  templateUrl: './course-edit-dialog.component.html',
  styleUrl: './course-edit-dialog.component.scss',
})
export class CourseEditDialogComponent {
  private dialogRef = inject(MatDialogRef);
  private dialogData = inject(MAT_DIALOG_DATA);

  name: string = this.dialogData.courseName;

  onSave() {
    this.dialogRef.close(this.name);
  }
}
