import { Injectable, inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { LocalstorageService } from '../services/localstorage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private _localStorage: LocalstorageService = inject(LocalstorageService); 

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token: string | null = this._localStorage.getItem('access_token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
}
