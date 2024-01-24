import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  imports: [],
  templateUrl: './auth-callback.component.html',
  styleUrl: './auth-callback.component.scss'
})
export class AuthCallbackComponent {
  private _route: ActivatedRoute = inject(ActivatedRoute);
  private _authService: AuthService = inject(AuthService);

  public ngOnInit(): void {
    const code = this._route.snapshot.queryParams['code'];
    if (code) {
      this._authService.exchangeCodeForToken(code).subscribe((res) => console.log(res));
    }
  }
}
