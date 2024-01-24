import { Injectable, inject } from '@angular/core';
import { environment } from '../../enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _http: HttpClient = inject(HttpClient);
  private _baseUrl: string = environment.apiBaseUrl;

  public redirectToGitHub(): void {
    window.location.href = `${this._baseUrl}/login`;
  }

 public exchangeCodeForToken(code: string): Observable<any> {
    return this._http.get<any>(`${this._baseUrl}/callback?code=${code}`);
  }
}
