import { Injectable, inject } from '@angular/core';
import { environment } from '../../enviroment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { AccessToken } from '../models/access-token';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public hasToken$: BehaviorSubject<boolean> = new BehaviorSubject(this._hasToken());
  private _http: HttpClient = inject(HttpClient);
  private _apiUrl: string = `${environment.apiBaseUrl}/auth/login`;
  private _localStorage: LocalstorageService = inject(LocalstorageService);

  public login(user: User): Observable<AccessToken> {
    return this._http.post<AccessToken>(this._apiUrl, user)
    .pipe(
      tap((token: AccessToken) => this._localStorage.setItem('access_token', JSON.stringify(token.access_token)))
    )
  }

  public register(user: User): Observable<User> {
    console.log("Register user: ", user);
    return of(user);
  }

  public logout(): void {
    this._localStorage.removeItem('access_token');
    this.hasToken$.next(false);
  }

  private _hasToken(): boolean {
    return this._localStorage.hasItem('access_token');
  }
}
