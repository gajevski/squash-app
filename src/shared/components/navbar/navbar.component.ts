import { Component, Input, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input({ required: true }) image!: string;
  private _authService: AuthService = inject(AuthService);

  public logout(): void {
    this._authService.logout();
  }
}
