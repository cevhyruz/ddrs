import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class App {
  readonly #iconSetService = inject(IconSetService);
  readonly #titleService = inject(Title);



  protected readonly title = signal('frontend');

  constructor() {
    this.#titleService.setTitle(this.title());
    this.#iconSetService.icons = { ...iconSubset };
  }

}
