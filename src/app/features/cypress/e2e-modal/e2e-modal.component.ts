import { Component, inject } from '@angular/core';
import {
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
import { MatOption, MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-e2e-modal',
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
    MatSelect,
    MatOption,
  ],
  templateUrl: './e2e-modal.component.html',
  styleUrl: './e2e-modal.component.scss',
})
export class E2eModalComponent {
  private dialogRef = inject(MatDialogRef);
  selectedValue: number;

  onSave() {
    this.dialogRef.close(true);
  }
}
