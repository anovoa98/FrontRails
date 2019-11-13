import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerComponent } from './components/owner/owner.component';
import { CrearOwnerComponent } from './components/crear-owner/crear-owner.component';
import { ServicesComponent } from './components/services/services.component';
import { CrearServiceComponent } from './components/crear-service/crear-service.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { CrearVehicleComponent } from './components/crear-vehicle/crear-vehicle.component';


const routes: Routes = [
  {path:'owners', component:OwnerComponent},
  {path:'owners/create', component:CrearOwnerComponent},
  {path:'services', component:ServicesComponent},
  {path:'services/create',component:CrearServiceComponent},
  {path:'vehicles', component:VehicleComponent},
  {path:'vehicles/create',component:CrearVehicleComponent},
  {path:'**', component: OwnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
