import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BreadcrumbService } from './breadcrumb.service';
import { Subscription } from 'rxjs';
import { Breadcrumb } from './breadcrumb.interface';
import { IconDirective } from '@coreui/icons-angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule, RouterModule, IconDirective],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss',
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  readonly breadcrumbService = inject(BreadcrumbService);

  private subscription!: Subscription;

  breadcrumbs: Breadcrumb[] = [];


  ngOnInit(): void {
    this.subscription = this.breadcrumbService.breadcrumbs$.subscribe(
      breadcrumbs => {
      this.breadcrumbs = breadcrumbs;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
