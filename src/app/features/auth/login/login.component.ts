import { Component, inject, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { select, Store } from '@ngrx/store';
import { AuthService } from '../../../services/auth.service';
import { Observable, tap } from 'rxjs';
import { login } from '../auth.actions';
import { FormsModule } from '@angular/forms';
import { getUserNickName } from '../auth.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatButton, MatFormField, MatInput, MatLabel, FormsModule],
  providers: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  private store = inject(Store);
  private router = inject(Router);
  private authService = inject(AuthService);

  userNickName$: Observable<string> = new Observable();
  name = '';

  ngOnInit() {
    this.userNickName$ = this.store.pipe(select(getUserNickName));
  }

  login() {
    this.authService
      .login(this.name)
      .pipe(
        tap((user: { name: string }) => {
          this.store.dispatch(login(user));
        }),
      )
      .subscribe((data) => {
        this.router.navigate(['/home']);
      });
  }
}
