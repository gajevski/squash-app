import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
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

enum TabEnum {
  Activity = "activity",
  Statistics = "statistics",
  Racket = "racket",
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProfileComponent {
  private _userService: UserService = inject(UserService);
  public user: Signal<User> = toSignal(this._userService.getUser(), { initialValue });
  public tabEnum: typeof TabEnum = TabEnum;
  public activeTab: string = this.tabEnum.Activity

  public changeTab(tab: TabEnum): void {
    this.activeTab = tab;
  }
}
