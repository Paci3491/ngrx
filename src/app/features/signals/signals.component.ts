import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignalsChildComponent } from './signals-child/signals-child.component';
import { HomeButtonComponent } from '../../shared/home-button/home-button.component';

@Component({
  selector: 'app-signals',
  imports: [SignalsChildComponent, HomeButtonComponent],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsComponent {}
