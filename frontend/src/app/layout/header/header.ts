import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { IconDirective } from '@coreui/icons-angular';

import {
  AvatarComponent,
  ContainerComponent,
  DropdownComponent,
  DropdownHeaderDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  HeaderComponent,
  HeaderNavComponent,
  HeaderTextComponent,
  HeaderTogglerDirective,
  NavItemComponent,
  SidebarToggleDirective,
  BreadcrumbRouterComponent
} from '@coreui/angular';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    CommonModule,
    AvatarComponent,
    ContainerComponent,
    DropdownComponent,
    DropdownHeaderDirective,
    DropdownItemDirective,
    DropdownMenuDirective,
    DropdownToggleDirective,
    HeaderComponent,
    HeaderNavComponent,
    HeaderTextComponent,
    HeaderTogglerDirective,
    NavItemComponent,
    SidebarToggleDirective,
    BreadcrumbRouterComponent,
    IconDirective,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header extends HeaderComponent {

  sidebarId = input('sidebar1');

  constructor() {
    super();
  }

}
