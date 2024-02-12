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

}
