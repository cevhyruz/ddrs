import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {
  provideRouter,
  withViewTransitions,
  withHashLocation,
  withInMemoryScrolling
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
      withHashLocation(),
      // withInMemoryScrolling({
      //   anchorScrolling: 'enabled'
      // }),
    ),
    IconSetService,
    provideAnimationsAsync()
  ]
};
