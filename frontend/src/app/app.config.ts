import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';

import {
  provideRouter,
  withViewTransitions,
  withHashLocation
} from '@angular/router';

import { routes } from './app.routes';

import { IconSetService } from '@coreui/icons-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withViewTransitions({
        skipInitialTransition: true
      }),
      withHashLocation()
    ),
    IconSetService,
  ]
};
