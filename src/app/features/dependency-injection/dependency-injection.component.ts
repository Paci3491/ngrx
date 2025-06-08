import { Component, OnInit } from '@angular/core';
import { DependencyInjectionService } from './dependency-injection.service';
import { FormsModule } from '@angular/forms';
import { HomeButtonComponent } from '../../shared/home-button/home-button.component';

@Component({
  selector: 'app-dependency-injection',
  imports: [FormsModule, HomeButtonComponent],
  templateUrl: './dependency-injection.component.html',
  styleUrl: './dependency-injection.component.scss',
})
export class DependencyInjectionComponent implements OnInit {
  dependencyService = new DependencyInjectionService();

  serviceTitle = this.dependencyService.title;

  ngOnInit() {}
}
