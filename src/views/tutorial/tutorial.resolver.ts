import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user';
import { TutorialService } from './tutorial.service';

export const tutorialResolver: ResolveFn<Observable<User>> = (route, state) => {
  const tutorialService: TutorialService = inject(TutorialService);
};
