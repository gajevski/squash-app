import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TutorialService } from './tutorial.service';
import { BasicTutorial } from '../../shared/models/basic-tutorial';

export const tutorialResolver: ResolveFn<Observable<BasicTutorial>> = (route, state) => {
  const tutorialService: TutorialService = inject(TutorialService);
  return tutorialService.getBasicTutorialProgress();
};
