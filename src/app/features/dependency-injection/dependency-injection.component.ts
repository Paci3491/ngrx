import { Component, OnInit } from '@angular/core';
import { DependencyInjectionService } from './dependency-injection.service';

@Component({
  selector: 'app-dependency-injection',
  imports: [],
  templateUrl: './dependency-injection.component.html',
  styleUrl: './dependency-injection.component.scss'
})
export class DependencyInjectionComponent implements OnInit{
  dependencyService = new DependencyInjectionService();

  serviceTitle = this.dependencyService.title

  ngOnInit() {

  }
}
