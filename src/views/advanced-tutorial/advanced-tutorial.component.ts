import { ChangeDetectionStrategy, Component } from '@angular/core';

enum TutorialTab {
  One = "1",
  Two = "2",
  Three = "3",
  Four = "4",
}

@Component({
  selector: 'app-advanced-tutorial',
  standalone: true,
  imports: [],
  templateUrl: './advanced-tutorial.component.html',
  styleUrl: './advanced-tutorial.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedTutorialComponent {
  public tutorialTab: typeof TutorialTab = TutorialTab;
  public activeTutorialTab: string = this.tutorialTab.One;

  public changeTutorialTab(tutorialTab: TutorialTab): void {
    this.activeTutorialTab = tutorialTab;
  }
}
