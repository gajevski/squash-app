import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../enviroment';
import { Observable } from 'rxjs';
import { AdvancedTutorial } from '../../shared/models/advanced-tutorial';

@Injectable({
  providedIn: 'root'
})
export class AdvancedTutorialService {
  private _http: HttpClient = inject(HttpClient);

  public getAdvancedTutorialProgress(): Observable<AdvancedTutorial> {
    return this._http.get<AdvancedTutorial>(`${environment.apiBaseUrl}/advanced-tutorial/progress`);
  }
  
  public updateAdvancedTutorialProgress(advancedTutorial: AdvancedTutorial): Observable<AdvancedTutorial> {
    return this._http.put<AdvancedTutorial>(`${environment.apiBaseUrl}/advanced-tutorial/progress`, advancedTutorial);
  }
}
