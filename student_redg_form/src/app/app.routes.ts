import { Routes } from '@angular/router';
import { Registration } from './registration/registration';
import { DetailsComponent } from './details/details';

export const routes: Routes = [
  { path: '', component: Registration },
  { path: 'details', component: DetailsComponent }
];
