import { ChangeDetectionStrategy, Component } from '@angular/core';

enum TutorialTab {
  Serve = "serve",
  Rally = "rally",
  Ballout = "ballout",
  Scoring = "scoring",
}

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [],
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TutorialComponent {
  public tutorialTab: typeof TutorialTab = TutorialTab;
  public activeTutorialTab: string = this.tutorialTab.Serve;

  public changeTutorialTab(tutorialTab: TutorialTab): void {
    this.activeTutorialTab = tutorialTab;
  }
}
