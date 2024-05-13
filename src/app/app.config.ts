import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { CustomHttpInterceptor } from './http.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routes),
    provideAnimationsAsync('animations'),
    importProvidersFrom(HttpClientModule),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    },
  ],
};
