import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input({ required: true }) image!: string;
  private _authService: AuthService = inject(AuthService);
  private _router: Router = inject(Router);

  public logout(): void {
    this._authService.logout();
    this._router.navigate(['/login'])
  }
}
