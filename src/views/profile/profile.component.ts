import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { User } from '../../shared/models/user';
import { Observable } from 'rxjs';
import { Tab } from '../../shared/enums/tab'

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
  public user$: Observable<User> = this._userService.getUser();
  public tab: typeof Tab = Tab;
  public activeTab: string = this.tab.Activity

  public changeTab(tab: Tab): void {
    this.activeTab = tab;
  }
}
