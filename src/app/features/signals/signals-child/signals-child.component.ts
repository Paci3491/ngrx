import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signals-child',
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatButton,
    FormsModule,
    NgIf,
  ],
  templateUrl: './signals-child.component.html',
  styleUrl: './signals-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsChildComponent {
  signalInput = input<string>();
  signalOutput = output();

  counter = signal(0);
  actions = signal<string[]>(['Initial']);
  showEffectFired = signal(false);
  doubledCounter = computed(() => this.counter() * 2);

  constructor() {
    effect(() => {
      console.log(this.counter());
      console.log(this.signalInput());
      this.showEffectFired.set(true);

      setTimeout(() => {
        this.showEffectFired.set(false);
      }, 1000);
    });
  }

  increment() {
    this.counter.update((oldValue) => oldValue + 1);
    this.actions.update((oldValue) => ['Increment', ...oldValue]);
  }

  decrement() {
    this.counter.update((oldValue) => oldValue - 1);
    this.actions.update((oldValue) => ['Decrement', ...oldValue]);
  }

  reset() {
    this.counter.set(0);
    this.actions.update(() => []);
  }
}
