import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const logoutInterceptor: HttpInterceptorFn = (req, next) => {
  const authService: AuthService = inject(AuthService);

}
