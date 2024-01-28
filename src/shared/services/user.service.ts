import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../enviroment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _http: HttpClient = inject(HttpClient);

  public getUser(): Observable<User> {
    return this._http.get<User>(`${environment.apiBaseUrl}/api/user`);
  }
}
