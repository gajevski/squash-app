import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LocalstorageService } from '../services/localstorage.service';
import { AccessToken } from '../models/access-token';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const localstorageService = inject(LocalstorageService);
  const accessToken: string | null = localstorageService.getItem('access_token');
  const trimmedToken = accessToken?.startsWith('"') && accessToken.endsWith('"') ? accessToken.slice(1, -1) : accessToken;

  if (trimmedToken) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${trimmedToken}`,
      },
    });

    return next(clonedRequest);
  }
  return next(req);
}
