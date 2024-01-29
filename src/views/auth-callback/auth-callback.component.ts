import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { LocalstorageService } from '../../shared/services/localstorage.service';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  imports: [],
  templateUrl: './auth-callback.component.html',
  styleUrl: './auth-callback.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthCallbackComponent {
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private _router: Router = inject(Router);
  private _authService: AuthService = inject(AuthService);
  private _localStorage: LocalstorageService = inject(LocalstorageService); 

  public ngOnInit(): void {
    const code: string = this._activatedRoute.snapshot.queryParams['code'];
    if (code) {
      this._authService.exchangeCodeForToken(code).subscribe((data) => {
        this._localStorage.setItem('token', data.token);
        this._router.navigate(['/home']);
    }); 
    }
  }
}
