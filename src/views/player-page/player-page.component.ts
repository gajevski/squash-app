import { Component, inject } from '@angular/core';
import { ActivityInfoComponent } from "../../shared/components/activity-info/activity-info.component";
import { RacketInfoComponent } from "../../shared/components/racket-info/racket-info.component";
import { ProfileTabsComponent } from "../../shared/components/profile-tabs/profile-tabs.component";
import { StatisticsInfoComponent } from "../../shared/components/statistics-info/statistics-info.component";
import { ActivatedRoute } from '@angular/router';
import { User } from '../../shared/models/user';
import { Tab } from '../../shared/enums/tab';

@Component({
    selector: 'app-player-page',
    standalone: true,
    templateUrl: './player-page.component.html',
    imports: [ActivityInfoComponent, RacketInfoComponent, ProfileTabsComponent, StatisticsInfoComponent]
})
export class PlayerPageComponent {
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

  public followUser() {
    console.log('follow');
  }

  public messageUser() {
    console.log('message');
  }
}
