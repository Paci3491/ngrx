import { Injectable } from '@angular/core';
import {debounceTime, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(name: string) {
    return of(
      {name}
    ).pipe(
      debounceTime(1000)
    )
  }

  logout() {
    return of(null).pipe(
      debounceTime(1000)
    )
  }
}
