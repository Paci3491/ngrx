import {Component, inject, OnInit} from '@angular/core';
import {MatCard} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {provideStore, select, Store} from '@ngrx/store';
import {AuthService} from '../../../services/auth.service';
import {Observable, tap} from 'rxjs';
import {login, logout} from '../auth.actions';
import {authReducer} from '../reducers';
import {FormsModule} from '@angular/forms';
import {AsyncPipe} from '@angular/common';
import {getName} from '../auth.selectors';

@Component({
  selector: 'app-login',
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    FormsModule,
    AsyncPipe
  ],
  providers: [
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  private store = inject(Store);
  private authService = inject(AuthService);

  storeName$: Observable<string> = new Observable();
  name = '';

  ngOnInit() {
    this.storeName$ = this.store.pipe(
      select(getName)
    )
  }

  login() {
    this.authService.login(this.name)
      .pipe(

        tap((user: {name: string}) => {
          this.store.dispatch(login(user));
        })
      )
      .subscribe(data => console.log(data))
  }

  logout() {
    this.authService.logout()
      .pipe(
        tap((user: null) => {
          this.store.dispatch(logout());
        })
      )
      .subscribe(data => console.log(data))
  }

}
