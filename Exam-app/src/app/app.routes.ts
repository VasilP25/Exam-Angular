import { Routes } from '@angular/router';
import { DetailsPageComponent } from '../details-page.component/details-page.component';
import { HomePageComponent } from '../home-page.component/home-page.component';
import { CreateComponent } from '../create.component/create.component';
import { CatalogComponent } from '../catalog.component/catalog.component';
import { MyTrainingsComponent } from '../my-trainings.component/my-trainings.component';
import { SearchComponent } from '../search-component/search-component';
import { LoginComponent } from '../user/login.component/login.component';
import { RegisterComponent } from '../user/register.component/register.component';
import { createComponent } from '@angular/core';
import { NotFoundComponent } from './not-found.component/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create', component: CreateComponent },
  {
    path: 'catalog',
    children: [
      { path: '', component: CatalogComponent },
      { path: ':trainingId', component: DetailsPageComponent },
    ],
  },
  {
    path: 'mytrainings',
    children: [
      { path: '', component: MyTrainingsComponent },
      { path: ':trainingId', component: DetailsPageComponent },
    ],
  },
  { path: 'search', component: SearchComponent },

  { path: '**', component: NotFoundComponent },
];
