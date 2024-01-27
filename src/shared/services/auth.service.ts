import { Injectable, inject } from '@angular/core';
import { environment } from '../../enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _http: HttpClient = inject(HttpClient);
  private _router: Router = inject(Router);
  private _localStorage: LocalstorageService = inject(LocalstorageService); 
  private _baseUrl: string = environment.apiBaseUrl;

  public loginWithGitHub(): void {
    window.location.href = `${this._baseUrl}/login`;
  }

 public exchangeCodeForToken(code: string): Observable<any> {
    return this._http.get<any>(`${this._baseUrl}/callback?code=${code}`);
  }

  public logout(): void {
    this._localStorage.removeItem('token');
    this._router.navigate(['/auth']);
  }
}
