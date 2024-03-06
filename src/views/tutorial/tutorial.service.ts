import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../enviroment';
import { Observable } from 'rxjs';
import { BasicTutorial } from '../../shared/models/basic-tutorial';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private _http: HttpClient = inject(HttpClient);

  public getBasicTutorialProgress(): Observable<BasicTutorial> {
    return this._http.get<BasicTutorial>(`${environment.apiBaseUrl}/basic-tutorial/progress`);
  }
  
  public updateBasicTutorialProgress(basicTutorial: BasicTutorial): Observable<BasicTutorial> {
    return this._http.put<BasicTutorial>(`${environment.apiBaseUrl}/basic-tutorial/progress`, basicTutorial);
  }
}
