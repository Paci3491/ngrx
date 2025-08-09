import { Component, inject } from '@angular/core';
import { HomeButtonComponent } from '../../shared/home-button/home-button.component';
import { MatDialog } from '@angular/material/dialog';
import { E2eModalComponent } from './e2e-modal/e2e-modal.component';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CypressService, DummyData } from './cypress.service';

@Component({
  selector: 'app-cypress',
  imports: [HomeButtonComponent, MatButton, RouterLink],
  templateUrl: './cypress.component.html',
  styleUrl: './cypress.component.scss',
})
export class CypressComponent {
  private dialog = inject(MatDialog);
  private cypressService = inject(CypressService);
  modalOutput = 'No modal output so far';

  dummyData: DummyData;

  openDialog() {
    const dialogRef = this.dialog.open(E2eModalComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.modalOutput = 'Modal successfully opened and saved';
      }
    });
  }

  fetchData() {
    this.cypressService.getDummyData().subscribe((data) => {
      this.dummyData = data;
    });
  }
}
