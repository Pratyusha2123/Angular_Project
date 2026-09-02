import { Routes } from '@angular/router';
import { Registration } from './registration/registration';
import { StudentDetails } from './student-details/student-details';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'registration',
    pathMatch: 'full'
  },
  {
    path: 'registration',
    component: Registration
  },
  {
    path: 'student-details',
    component: StudentDetails
  }
];