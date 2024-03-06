import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TutorialServeComponent } from "../../shared/components/basic-tutorial/tutorial-serve/tutorial-serve.component";
import { TutorialRallyComponent } from "../../shared/components/basic-tutorial/tutorial-rally/tutorial-rally.component";
import { TutorialBalloutComponent } from "../../shared/components/basic-tutorial/tutorial-ballout/tutorial-ballout.component";
import { TutorialScoringComponent } from "../../shared/components/basic-tutorial/tutorial-scoring/tutorial-scoring.component";
import { ActivatedRoute } from '@angular/router';
import { BasicTutorial } from '../../shared/models/basic-tutorial';
import { TutorialService } from './tutorial.service';
import { Observable, take, tap } from 'rxjs';

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
    let basicTutorial: BasicTutorial = {};

    switch (this.activeTutorialTab) {
      case TutorialTab.Serve:
        basicTutorial.isServeFinished = true;
        this.changeTutorialTab(TutorialTab.Rally);
        break;
      case TutorialTab.Rally:
        basicTutorial.isRallyFinished = true;
        this.changeTutorialTab(TutorialTab.Ballout);
        break;
      case TutorialTab.Ballout:
        basicTutorial.isBalloutFinished = true;
        this.changeTutorialTab(TutorialTab.Scoring);
        break;
      case this.tutorialTab.Scoring:
        basicTutorial.isScoringFinished = true;
        break;
    }

    this._tutorialService.updateBasicTutorialProgress(basicTutorial)
      .pipe(
        take(1),
        tap((basicTutorial: BasicTutorial) => this.progress = basicTutorial)
      )
      .subscribe()
  }
}
