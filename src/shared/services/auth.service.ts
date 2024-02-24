import { Injectable, inject } from '@angular/core';
import { environment } from '../../enviroment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, of, tap } from 'rxjs';
import { AccessToken } from '../models/access-token';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _localStorage: LocalstorageService = inject(LocalstorageService);
  private _http: HttpClient = inject(HttpClient);
  private _apiUrl: string = `${environment.apiBaseUrl}/auth`;

  public login(user: User): Observable<AccessToken> {
    return this._http.post<AccessToken>(`${this._apiUrl}/login`, user)
    .pipe(
      tap((token: AccessToken) => this._localStorage.setItem('access_token', JSON.stringify(token.access_token)))
    )
  }
  
  public register(user: User): Observable<AccessToken> {
    return this._http.post<AccessToken>(`${this._apiUrl}/register`, user)
    .pipe(
      tap((token: AccessToken) => this._localStorage.setItem('access_token', JSON.stringify(token.access_token)))
    )
  }

  public logout(): void {
    this._localStorage.removeItem('access_token');
  }
}
