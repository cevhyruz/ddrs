import { Component, inject } from '@angular/core';
import { IconDirective } from '@coreui/icons-angular';
import { Footer } from './../../layout/footer/footer';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {
  ButtonDirective,
  ColComponent,
  ContainerComponent,
  FormControlDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  RowComponent,
} from '@coreui/angular';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.html',
  styleUrl: './page404.scss',
  imports: [
    Footer,
    ContainerComponent, RowComponent, ColComponent, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective]
})
export class Page404 {
  currentUrl: string;

  readonly location = inject(Location);

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
  }

  goBack() {
    this.location.back();
  }
}
