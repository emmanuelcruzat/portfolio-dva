import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { LeadershipComponent } from './pages/leadership/leadership';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'leadership', component: LeadershipComponent },
  { path: '**', redirectTo: '' },
];
