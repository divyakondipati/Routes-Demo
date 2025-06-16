import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-laptops',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './laptops.component.html',
  styleUrl: './laptops.component.css'
})
export class LaptopsComponent {
  laptops = [
    {
      name: 'MacBook Pro 16"',
      price: 2499,
      image: 'https://via.placeholder.com/250x200?text=MacBook+Pro'
    },
    {
      name: 'Dell XPS 15',
      price: 1799,
      image: 'https://via.placeholder.com/250x200?text=Dell+XPS'
    },
    {
      name: 'HP Spectre x360',
      price: 1499,
      image: 'https://via.placeholder.com/250x200?text=HP+Spectre'
    }
  ];
}
