import { ChangeDetectionStrategy, Component } from '@angular/core';

enum TutorialTab {
  Serve = "serve",
  Rally = "rally",
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
  public activeTutorialTab: string = 'serve';
  public tutorialTab: typeof TutorialTab = TutorialTab;

  public changeTab(tutorialTab: TutorialTab): void {
    this.activeTutorialTab = tutorialTab;
  }
}
