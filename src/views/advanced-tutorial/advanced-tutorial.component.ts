import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvancedTutorial } from '../../shared/models/advanced-tutorial';
import { AdvancedTutorialService } from './advanced-tutorial.service';
import { take, tap } from 'rxjs';

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
  private _route: ActivatedRoute = inject(ActivatedRoute);
  private _router: Router = inject(Router);
  private _tutorialService: AdvancedTutorialService = inject(AdvancedTutorialService);
  public progress: AdvancedTutorial = this._route.snapshot.data['progress'];

  public changeTutorialTab(tutorialTab: TutorialTab): void {
    this.activeTutorialTab = tutorialTab;
  }

  public updateProgress(): void {
    let advancedTutorial: AdvancedTutorial = {};

    switch (this.activeTutorialTab) {
      case TutorialTab.One:
        advancedTutorial.one = true;
        this.changeTutorialTab(TutorialTab.Two);
        break;
      case TutorialTab.Two:
        advancedTutorial.two = true;
        this.changeTutorialTab(TutorialTab.Three);
        break;
      case TutorialTab.Three:
        advancedTutorial.three = true;
        this.changeTutorialTab(TutorialTab.Four);
        break;
      case this.tutorialTab.Four:
        advancedTutorial.four = true;
        this._router.navigate(['/home'])
        break;
    }

    this._tutorialService.updateAdvancedTutorialProgress(advancedTutorial)
      .pipe(
        take(1),
        tap((advancedTutorial: AdvancedTutorial) => this.progress = advancedTutorial)
      )
      .subscribe()
  }
}
