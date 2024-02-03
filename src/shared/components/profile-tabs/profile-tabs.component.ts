import { Component, EventEmitter, Output } from '@angular/core';
import { Tab } from '../../enums/tab';

@Component({
  selector: 'app-profile-tabs',
  standalone: true,
  imports: [],
  templateUrl: './profile-tabs.component.html',
  styleUrl: './profile-tabs.component.scss'
})
export class ProfileTabsComponent {
  @Output() public tabChanged: EventEmitter<Tab> = new EventEmitter<Tab>(); 
  public tab: typeof Tab = Tab;

  public changeTab(tab: Tab): void {
    this.tabChanged.emit(tab);
  }
}
