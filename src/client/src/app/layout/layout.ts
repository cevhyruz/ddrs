import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

import { NgScrollbar } from 'ngx-scrollbar';

import { Header } from './header/header';
import { Footer } from './footer/footer';

import {
  ContainerComponent,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  ShadowOnScrollDirective,
} from '@coreui/angular';

import { navItems } from './_nav';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet, RouterLink,
    ContainerComponent,
    SidebarBrandComponent, SidebarComponent,
    SidebarHeaderComponent, SidebarNavComponent,
    NgScrollbar,
    Header, Footer,
    ShadowOnScrollDirective,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  public navItems = [...navItems];

}
