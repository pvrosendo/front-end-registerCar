import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewCarsComponent } from './pages/view-cars/view-cars.component';
import { RegisterCarComponent } from './pages/register-car/register-car.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'view-cars', component: ViewCarsComponent},
  {path: 'register-cars', component: RegisterCarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
