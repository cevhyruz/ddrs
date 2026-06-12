import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Breadcrumb } from './breadcrumb.interface';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private breadcrumbsSubject = new BehaviorSubject<Breadcrumb[]>([]);
  breadcrumbs$ = this.breadcrumbsSubject.asObservable();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
        this.breadcrumbsSubject.next([
          { label: 'Home', url: 'landing' },
          ...breadcrumbs
        ]);
        console.log(breadcrumbs);
    });
  }

  private toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, txt =>
      txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
    );
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Breadcrumb[] = [] ): Breadcrumb[] {

    if (!route) {
      return breadcrumbs;
    }

    const routeURL: string = route.snapshot.url.map(segment => segment.path).join('/');
    const newUrl = routeURL ? `${url}/${routeURL}` : url;
    let breadcrumbLabel = route.snapshot.data['breadcrumb'];
    const breadcrumbIcon = route.snapshot.data['icon'];

    if (breadcrumbLabel) {
      // replace route param placeholders
      Object.entries(route.snapshot.params).forEach(([key, value]) => {
        breadcrumbLabel = breadcrumbLabel.replace(`:${key}`, value);
      });

      breadcrumbLabel = this.toTitleCase(breadcrumbLabel);

      breadcrumbs.push({
        label: breadcrumbLabel,
        url: newUrl,
        icon: breadcrumbIcon,
      });
    }

    for (const child of route.children) {
      return this.createBreadcrumbs(child, newUrl, breadcrumbs);
    }

    return breadcrumbs;
  }

  /** Manually update breadcrumbs when inside a child component **/
  addBreadcrumb(label: string, url: string = '') {
    const breadcrumbs = this.breadcrumbsSubject.value;
    breadcrumbs.push({ label, url });
    this.breadcrumbsSubject.next(breadcrumbs);
  }

  /** Remove manually added breadcrumbs **/
  removeBreadcrumb(label: string) {
    const breadcrumbs = this.breadcrumbsSubject.value.filter(bc => bc.label !== label);
    this.breadcrumbsSubject.next(breadcrumbs);
  }
}
