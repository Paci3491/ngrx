import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ChangeDetectionService {
  randomGreeting$ = new Subject<string>();

  constructor() {
    setTimeout(() => {
      this.updateSubject();
    }, 2000);
  }

  updateSubject() {
    this.randomGreeting$.next(
      `Hello Service User ${Math.floor(Math.random() * 100)}`,
    );
  }
}
