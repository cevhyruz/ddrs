import { Component } from '@angular/core';
import { Header  } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';
import { RouterLink } from '@angular/router';
import {
  ContainerComponent,
  HeaderComponent,
  RowComponent,
  NavItemComponent,
  ColComponent,
  ButtonDirective,
  CardComponent,
  HeaderNavComponent,
  CardBodyComponent,
  ShadowOnScrollDirective,
  AvatarComponent,
} from '@coreui/angular';

@Component({
  selector: 'app-landing',
  imports: [
    RouterLink,
    Header,
    HeaderComponent,
    HeaderNavComponent,
    Footer,
    NavItemComponent,
    ShadowOnScrollDirective,
    ButtonDirective,
    ContainerComponent,
    RowComponent,
    ColComponent,
    CardComponent,
    CardBodyComponent,
    AvatarComponent,
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {

}
