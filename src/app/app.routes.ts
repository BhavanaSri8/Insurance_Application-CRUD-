import { Routes } from '@angular/router';
import { InsuranceAddComponent } from './components/insurance-add/insurance-add';
import { InsuranceGetComponent } from './components/insurance-get/insurance-get';
import { InsuranceUpdateComponent } from './components/insurance-update/insurance-update';
import { InsuranceDeleteComponent } from './components/insurance-delete/insurance-delete';

export const routes: Routes = [
  { path: 'add', component: InsuranceAddComponent },
  { path: 'get', component: InsuranceGetComponent },
  { path: 'update', component: InsuranceUpdateComponent },
  { path: 'delete', component: InsuranceDeleteComponent },
  { path: '', redirectTo: 'add', pathMatch: 'full' }
];
