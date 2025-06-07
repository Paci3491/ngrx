import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatFabAnchor } from '@angular/material/button';

@Component({
  selector: 'app-home-button',
  imports: [MatIcon, RouterLink, MatFabAnchor],
  templateUrl: './home-button.component.html',
  styleUrl: './home-button.component.scss',
})
export class HomeButtonComponent {}
