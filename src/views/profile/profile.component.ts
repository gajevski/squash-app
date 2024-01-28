import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  private _authService: AuthService = inject(AuthService);
  private _userService: UserService = inject(UserService);
  public user$: Observable<User> = this._userService.getUser();

  public logout(): void {
    this._authService.logout();
  }
}
