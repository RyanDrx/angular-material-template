
import { Routes } from '@angular/router';
import { GridComponent } from '../components/grid/grid.component';
import { HomeComponent } from '../components/home/home.component';
import { TableComponent } from '../components/table/table.component';



export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'grid', component: GridComponent },
  { path: 'table', component: TableComponent },
];

