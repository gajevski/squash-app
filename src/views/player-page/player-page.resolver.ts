import { ResolveFn } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user';

export const playerPageResolver: ResolveFn<Observable<User>> = (route, state) => {
  const userService: UserService = inject(UserService);
  return userService.getUser();
};
