import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { JwtInterceptor } from '../shared/interceptors/jwt.interceptor';
import { PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), provideClientHydration(), provideHttpClient(withFetch()), { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, { provide: PRECONNECT_CHECK_BLOCKLIST, useValue: 'https://avatars.githubusercontent.com' }
  ]
};
