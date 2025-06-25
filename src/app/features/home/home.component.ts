import { Component, inject, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { Observable, tap } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../ngrx/auth/auth.service';
import { logout } from '../ngrx/auth/auth.actions';
import { getUserNickName } from '../ngrx/auth/auth.selectors';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MatToolbar, MatIcon, MatIconButton, AsyncPipe, NgIf, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private store = inject(Store);
  private router = inject(Router);
  private authService = inject(AuthService);

  userNickName$: Observable<string> = new Observable();

  ngOnInit() {
    this.userNickName$ = this.store.pipe(select(getUserNickName));
  }

  logout() {
    this.authService
      .logout()
      .pipe(
        tap((user: null) => {
          this.store.dispatch(logout());
        }),
      )
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/login']);
      });
  }
}
