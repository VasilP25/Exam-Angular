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
import { isAuthForCreate, isAuthForLoginRegsiter } from '../guards';
import { AboutComponent } from '../about.component/about.component';
import { EditComponent } from '../edit-component/edit-component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [isAuthForLoginRegsiter],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [isAuthForLoginRegsiter],
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [isAuthForCreate],
  },
  {
    path: 'catalog',
    component: CatalogComponent,
  },
  {
    path: 'mytrainings',
    component: MyTrainingsComponent,
  },
  { path: 'search', component: SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: 'details/:trainingId', component: DetailsPageComponent },
  { path: 'edit/:trainingId', component: EditComponent },

  { path: '**', component: NotFoundComponent },
];
