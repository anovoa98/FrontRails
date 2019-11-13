import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicles:any[] = [];

  constructor(private servicio:ApiServiceService) { 
    this.obtenerVehicles();
  }

  ngOnInit() {
  }

  obtenerVehicles(){
    this.servicio.getVehicles().subscribe((data:any)=>{
      this.vehicles = data;
      console.log(data);
    },(error)=>{
      console.log(error.error.error.message);
    });
  }

  eliminarVehicle(index:number){
    this.servicio.deleteVehicle(this.vehicles[index].id).subscribe((data:any)=>{
      this.obtenerVehicles();
    });
    
  }

}
