import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): true | UrlTree => {
  return localStorage.getItem('token')
    ? true
    : inject(Router).createUrlTree(['/auth']);
};