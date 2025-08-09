import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DummyData {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Injectable({
  providedIn: 'root',
})
export class CypressService {
  private http = inject(HttpClient);

  getDummyData(): Observable<DummyData> {
    return this.http.get<DummyData>(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
  }
}
