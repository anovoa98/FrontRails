import { Component, OnInit } from '@angular/core';
import { VehicleInterface } from 'src/app/interfaces/vehicle-interface';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-vehicle',
  templateUrl: './crear-vehicle.component.html',
  styleUrls: ['./crear-vehicle.component.css']
})
export class CrearVehicleComponent implements OnInit {

  placa:string;
  transitlog:string;
  color:string;
  owner:string;
  service:string;
  vehicle:VehicleInterface;

  constructor(private servicio:ApiServiceService, private route:Router) { }

  ngOnInit() {
  }

  crearVehicle(){
    this.vehicle = {placa:this.placa, transitlog:this.transitlog, color:this.color, 
    owner_id:parseInt(this.owner), service_id:parseInt(this.service)};
    console.log(this.vehicle);

    this.servicio.postVehicles(this.vehicle).subscribe((data:any)=>{
      console.log(data);
      this.route.navigate(['vehicles']);
    });
  }

}
