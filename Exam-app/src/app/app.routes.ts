import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component/home-page.component';
import { LoginComponent } from './user/login.component/login.component';
import { RegisterComponent } from './user/register.component/register.component';
import { CreateComponent } from './create.component/create.component';
import { SingleTrainingComponent } from './single.training.component/single.training.component';
import { CatalogComponent } from './catalog.component/catalog.component';
import { MyTrainingsComponent } from './my-trainings.component/my-trainings.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create', component: CreateComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'mytrainings', component: MyTrainingsComponent },
];
