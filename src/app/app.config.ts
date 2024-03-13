import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { jwtInterceptor } from '../shared/interceptors/jwt.interceptor';
import { logoutInterceptor } from '../shared/interceptors/logout.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withViewTransitions(), withComponentInputBinding()), provideClientHydration(), provideAnimations(), provideHttpClient(withInterceptors([jwtInterceptor, logoutInterceptor]), withFetch())
  ]
};
