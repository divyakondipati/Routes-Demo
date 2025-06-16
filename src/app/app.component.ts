import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BreadcrumbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Routes_Demo';
}
