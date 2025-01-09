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
}
