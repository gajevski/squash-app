import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { User } from '../../shared/models/user';
import { toSignal } from '@angular/core/rxjs-interop';

const initialValue: User = {
  id: 0,
  username: 'name',
  image: '../../assets/images/squash-logo.png',
  racket: 'racket',
};

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProfileComponent {
  private _authService: AuthService = inject(AuthService);
  private _userService: UserService = inject(UserService);
  public user: Signal<User> = toSignal(this._userService.getUser(), { initialValue });

  public logout(): void {
    this._authService.logout();
  }
}
