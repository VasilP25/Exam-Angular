import { Routes } from '@angular/router';
import { DetailsPageComponent } from './dynamic/details-page.component/details-page.component';
import { HomePageComponent } from './static-Pages/home-page.component/home-page.component';
import { CreateComponent } from './create-edit/create.component/create.component';
import { MyTrainingsComponent } from './dynamic/my-trainings.component/my-trainings.component';
import { NotFoundComponent } from './static-Pages/not-found.component/not-found.component';
import { AboutComponent } from './static-Pages/about.component/about.component';
import { LoginComponent } from './user/login.component/login.component';
import { RegisterComponent } from './user/register.component/register.component';
import { canActivateLogged, canActivateNotLogged } from './guards/guards';
import { CatalogComponent } from './dynamic/catalog.component/catalog.component';
import { SearchComponent } from './dynamic/search-component/search-component';
import { EditComponent } from './create-edit/edit-component/edit-component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [canActivateNotLogged],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [canActivateNotLogged],
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [canActivateLogged],
  },
  {
    path: 'catalog',
    component: CatalogComponent,
  },
  {
    path: 'mytrainings',
    component: MyTrainingsComponent,
    canActivate: [canActivateLogged],
  },
  { path: 'search', component: SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: 'details/:trainingId', component: DetailsPageComponent },
  {
    path: 'edit/:trainingId',
    component: EditComponent,
    canActivate: [canActivateLogged],
  },

  { path: '**', component: NotFoundComponent },
];
