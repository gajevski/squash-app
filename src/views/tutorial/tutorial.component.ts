import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TutorialServeComponent } from "../../shared/components/basic-tutorial/tutorial-serve/tutorial-serve.component";
import { TutorialRallyComponent } from "../../shared/components/basic-tutorial/tutorial-rally/tutorial-rally.component";
import { TutorialBalloutComponent } from "../../shared/components/basic-tutorial/tutorial-ballout/tutorial-ballout.component";
import { TutorialScoringComponent } from "../../shared/components/basic-tutorial/tutorial-scoring/tutorial-scoring.component";

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
    imports: [TutorialServeComponent, TutorialRallyComponent, TutorialBalloutComponent, TutorialScoringComponent]
})
export class TutorialComponent {
  public tutorialTab: typeof TutorialTab = TutorialTab;
  public activeTutorialTab: string = this.tutorialTab.Serve;

  public changeTutorialTab(tutorialTab: TutorialTab): void {
    this.activeTutorialTab = tutorialTab;
  }
}
