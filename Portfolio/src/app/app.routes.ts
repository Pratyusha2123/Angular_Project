import { Routes } from '@angular/router';

// Yahan apne components import karein (path aur class name check karke)
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Resume } from './components/resume/resume';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'projects',
    component: Projects
  },
  {
    path: 'skills',
    component: Skills
  },
  {
    path: 'resume',
    component: Resume
  },
  {
    path: 'contact',
    component: Contact
  }
];