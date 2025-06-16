import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {
  breadcrumbs: { label: string; url: string }[] = [];
  route = inject(ActivatedRoute);
  router = inject(Router);
  currentUrl = '';
  breadcrumbMap: Record<string, string>= {
    categories: 'Categories',
    electronics: 'Electronics',
    laptops: 'Laptops'
  };
  
  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.currentUrl = this.router.url;
      this.breadcrumbs = this.buildBreadcrumbsFromUrl(this.router.url);
     // this.addBreadcrumb();
    });
  }
  buildBreadcrumbsFromUrl(url: string): { label: string, url: string }[] {
    const breadcrumbs = [];
    const segments = url.split('/').filter(Boolean);
    let cumulativeUrl = '';
  
    for (const segment of segments) {
      cumulativeUrl += `/${segment}`;
      const label = this.breadcrumbMap[segment];
      if (label) {
        breadcrumbs.push({ label, url: cumulativeUrl });
      }
    }
  
    return breadcrumbs;
}
}
