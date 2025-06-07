import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-detection-list',
  imports: [MatButton, MatList, MatListItem],
  templateUrl: './detection-list.component.html',
  styleUrl: './detection-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetectionListComponent {
  private cdr = inject(ChangeDetectorRef);

  itemList = [
    { name: 'Awesome Item 1' },
    { name: 'Awesome Item 2' },
    { name: 'Awesome Item 3' },
  ];

  pushItemToItemList() {
    this.itemList.push({ name: 'Awesome Item 4' });
    setTimeout(() => {
      this.itemList.push({ name: 'Awesome Item From Timeout' });
      this.cdr.markForCheck();
    }, 1000);
  }
}
