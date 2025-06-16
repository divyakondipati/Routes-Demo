import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  private router = inject(Router)
  categoryList = ['Electronics', 'Fashion', 'Home & Living', 'Sports']
  constructor(){}
  navigateToCategory(category: string){
    let route = category.toLocaleLowerCase();
   this.router.navigateByUrl(`/categories/${route}`)
  }
}
