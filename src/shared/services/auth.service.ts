import { Injectable, inject } from '@angular/core';
import { environment } from '../../enviroment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _http: HttpClient = inject(HttpClient);
  private _baseUrl: string = environment.apiBaseUrl;

  public redirectToGitHub(): void {
    window.location.href = `${this._baseUrl}/login`;
  }
}
