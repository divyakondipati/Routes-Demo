import { Routes } from '@angular/router';
import { ElectronicsComponent } from './electronics/electronics.component';
import { CategoriesComponent } from './categories/categories.component';
import { LaptopsComponent } from './laptops/laptops.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'categories',
        pathMatch: 'full',
    },
    {
        path: 'categories',
        component: CategoriesComponent
    },
    {
        path: 'categories/electronics',
        component: ElectronicsComponent,
    },
    {
        path: 'categories/electronics/laptops',
        component: LaptopsComponent,
    }
];
