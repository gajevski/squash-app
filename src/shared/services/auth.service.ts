import { Injectable } from '@angular/core';
import { environment } from '../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _baseUrl: string = environment.apiBaseUrl;
}
