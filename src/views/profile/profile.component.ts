import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { User } from '../../shared/models/user';
import { Tab } from '../../shared/enums/tab'
import { ActivatedRoute } from '@angular/router';
import { ProfileTabsComponent } from "../../shared/components/profile-tabs/profile-tabs.component";
import { RacketInfoComponent } from "../../shared/components/racket-info/racket-info.component";
import { StatisticsInfoComponent } from "../../shared/components/statistics-info/statistics-info.component";
import { ActivityInfoComponent } from "../../shared/components/activity-info/activity-info.component";

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, NgOptimizedImage, ProfileTabsComponent, RacketInfoComponent, StatisticsInfoComponent, ActivityInfoComponent]
})

export class ProfileComponent {
  private _route: ActivatedRoute = inject(ActivatedRoute);
  public user: User = this._route.snapshot.data['user'];
  public tab: typeof Tab = Tab;
  public activeTab: string = this.tab.Activity

  public get userImage(): string {
    return this.user.image ? this.user.image : '../../assets/images/placeholder-profile-image.png';
  }

  public changeTab(tab: Tab): void {
    this.activeTab = tab;
  }
}
