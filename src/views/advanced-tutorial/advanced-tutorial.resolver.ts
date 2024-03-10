import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AdvancedTutorial } from '../../shared/models/advanced-tutorial';
import { AdvancedTutorialService } from './advanced-tutorial.service';

export const advancedTutorialResolver: ResolveFn<Observable<AdvancedTutorial>> = (route, state) => {
  const tutorialService: AdvancedTutorialService = inject(AdvancedTutorialService);
  return tutorialService.getAdvancedTutorialProgress();
};
