import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _http: HttpClient = inject(HttpClient)

  public auth(): Observable<any> {
    console.log('auth called');
    return this._http.get('http://localhost:3000/api/auth/callback/github/')
  }
}
