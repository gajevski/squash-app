import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

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
  private _router: Router = inject(Router);

  public changeTutorialTab(tutorialTab: TutorialTab): void {
    this.activeTutorialTab = tutorialTab;
  }

  
  public updateProgress(): void {
    let advancedTutorial: any = {};

    switch (this.activeTutorialTab) {
      case TutorialTab.One:
        this.changeTutorialTab(TutorialTab.Two);
        break;
      case TutorialTab.Two:
        this.changeTutorialTab(TutorialTab.Three);
        break;
      case TutorialTab.Three:
        this.changeTutorialTab(TutorialTab.Four);
        break;
      case this.tutorialTab.Four:
        this._router.navigate(['/home'])
        break;
    }
  }
}
