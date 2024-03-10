import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, throwError } from 'rxjs';

export const logoutInterceptor: HttpInterceptorFn = (req, next) => {
  const authService: AuthService = inject(AuthService);

  return next(req).pipe(catchError(err => {
    if ([401, 403].includes(err.status)) {
        authService.logout();
    }

    const error = err.error?.message || err.statusText;
    console.error(err);
    return throwError(() => error);
}))

}
