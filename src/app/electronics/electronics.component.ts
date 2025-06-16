import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-electronics',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent {
  private router = inject(Router);
  subcategories = ['Laptops', 'Smartphones', 'TVs', 'Audio'];
  constructor(){}
  navigateToProduct(item:string){
   const route =  item.toLowerCase();
  this.router.navigate(['categories/electronics', route])
  }
}
