import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TutorialService } from './tutorial.service';

export const tutorialResolver: ResolveFn<Observable<any>> = (route, state) => {
  const tutorialService: TutorialService = inject(TutorialService);
  return tutorialService.getBasicTutorialProgress();
};
