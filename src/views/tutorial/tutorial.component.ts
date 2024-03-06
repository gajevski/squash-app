import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TutorialServeComponent } from "../../shared/components/basic-tutorial/tutorial-serve/tutorial-serve.component";
import { TutorialRallyComponent } from "../../shared/components/basic-tutorial/tutorial-rally/tutorial-rally.component";
import { TutorialBalloutComponent } from "../../shared/components/basic-tutorial/tutorial-ballout/tutorial-ballout.component";
import { TutorialScoringComponent } from "../../shared/components/basic-tutorial/tutorial-scoring/tutorial-scoring.component";
import { ActivatedRoute } from '@angular/router';
import { BasicTutorial } from '../../shared/models/basic-tutorial';
import { TutorialService } from './tutorial.service';
import { Observable, take } from 'rxjs';

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
  private _route: ActivatedRoute = inject(ActivatedRoute);
  private _tutorialService: TutorialService = inject(TutorialService);
  public progress: BasicTutorial = this._route.snapshot.data['progress'];

  public changeTutorialTab(tutorialTab: TutorialTab): void {
    this.activeTutorialTab = tutorialTab;
  }

  public updateProgress(): void {
    this._tutorialService.updateBasicTutorialProgress({
      userId: 1,
      isServeFinished: true,
      isRallyFinished: false,
      isBalloutFinished: false,
      isScoringFinished: false
    })
      .pipe(
        take(1)
      )
      .subscribe()
  }
}
