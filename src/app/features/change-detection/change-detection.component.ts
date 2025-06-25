import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { DetectionListComponent } from './list/detection-list.component';
import { MatButton } from '@angular/material/button';
import { Subject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionService } from './change-detection.service';
import { HomeButtonComponent } from '../../shared/home-button/home-button.component';

@Component({
  selector: 'app-change-detection',
  imports: [DetectionListComponent, MatButton, AsyncPipe, HomeButtonComponent],
  providers: [ChangeDetectionService],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionComponent implements OnInit {
  private changeDetectionService = inject(ChangeDetectionService);
  randomGreeting$ = new Subject<string>();
  randomGreeting = '';
  randomGreetingService = '';

  ngOnInit() {
    this.randomGreeting$.subscribe((greeting) => {
      this.randomGreeting = greeting;
    });

    this.changeDetectionService.randomGreeting$.subscribe((greeting) => {
      this.randomGreetingService = greeting;
    });
  }

  updateLocalSubject() {
    this.randomGreeting$.next(`Hello User ${Math.floor(Math.random() * 100)}`);
  }

  updateServiceSubject() {
    this.changeDetectionService.updateSubject();
  }
}
