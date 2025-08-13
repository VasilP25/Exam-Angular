import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component/home-page.component';
import { LoginComponent } from './login.component/login.component';
import { RegisterComponent } from './register.component/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
