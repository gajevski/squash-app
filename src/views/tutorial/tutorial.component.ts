import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TutorialServeComponent } from "../../shared/components/tutorial-serve/tutorial-serve.component";
import { TutorialRallyComponent } from "../../shared/components/tutorial-rally/tutorial-rally.component";

enum TutorialTab {
  Serve = "serve",
  Rally = "rally",
  Ballout = "ballout",
  Scoring = "scoring",
}

@Component({
    selector: 'app-tutorial',
    standalone: true,
    templateUrl: './tutorial.component.html',
    styleUrl: './tutorial.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TutorialServeComponent, TutorialRallyComponent]
})
export class TutorialComponent {
  public tutorialTab: typeof TutorialTab = TutorialTab;
  public activeTutorialTab: string = this.tutorialTab.Serve;

  public changeTutorialTab(tutorialTab: TutorialTab): void {
    this.activeTutorialTab = tutorialTab;
  }
}
