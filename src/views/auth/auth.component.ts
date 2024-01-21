import { Component, OnDestroy, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnDestroy {
  private _authService: AuthService = inject(AuthService);
  private _onDestroy$: Subject<boolean> = new Subject<boolean>

  public authUser(): void {
    this._authService.auth().pipe(
      takeUntil(this._onDestroy$)
    ).subscribe();
  }

  public ngOnDestroy(): void {
    this._onDestroy$.next(true);  
    this._onDestroy$.unsubscribe();
  }
}
