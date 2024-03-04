import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private _http: HttpClient = inject(HttpClient);

  public getBasicTutorialProgress(): Observable<any> {
    return this._http.get<any>(`${environment.apiBaseUrl}/basic-tutorial/progress`);
  }
}
