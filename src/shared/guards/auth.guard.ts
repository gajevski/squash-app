import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LocalstorageService } from '../services/localstorage.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): true | UrlTree => {
  return inject(LocalstorageService).getItem('access_token')
  ? true
  : inject(Router).createUrlTree(['/login']);
};
