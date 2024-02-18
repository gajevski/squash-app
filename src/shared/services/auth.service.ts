import { Injectable, inject } from '@angular/core';
import { environment } from '../../enviroment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _http: HttpClient = inject(HttpClient);
  private _apiUrl: string = `${environment.apiBaseUrl}/auth/login`;

  public login(user: User): Observable<User> {
    return this._http.post<User>(this._apiUrl, user)
  }

  public register(user: User): Observable<User> {
    console.log("Register user: ", user);
    return of(user);
  }
}
