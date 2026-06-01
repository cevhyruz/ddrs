import { Component } from '@angular/core';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  GutterDirective,
  FooterComponent,
} from '@coreui/angular';

@Component({
  selector: 'app-footer',
  imports: [
    ContainerComponent,
    GutterDirective,
    RowComponent,
    ColComponent,
    FooterComponent,
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer extends FooterComponent {
  constructor() {
    super();
  }
}
