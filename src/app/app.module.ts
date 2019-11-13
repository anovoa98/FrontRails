import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnerComponent } from './components/owner/owner.component';
import { CrearOwnerComponent } from './components/crear-owner/crear-owner.component';
import { ServicesComponent } from './components/services/services.component';
import { CrearServiceComponent } from './components/crear-service/crear-service.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { CrearVehicleComponent } from './components/crear-vehicle/crear-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnerComponent,
    CrearOwnerComponent,
    ServicesComponent,
    CrearServiceComponent,
    VehicleComponent,
    CrearVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
