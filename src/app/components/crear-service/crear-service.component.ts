import { Component, OnInit } from '@angular/core';
import { ServiceInterface } from 'src/app/interfaces/service-interface';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-service',
  templateUrl: './crear-service.component.html',
  styleUrls: ['./crear-service.component.css']
})
export class CrearServiceComponent implements OnInit {

  truckCrane: boolean;
  motorCycleCrane:boolean;
  workshopCar:boolean;
  motorcicleWorkshop:string;
  service:ServiceInterface;

  constructor(private servicio:ApiServiceService, private route:Router) { }

  ngOnInit() {
  }

  crearService(){
    this.service = {truckCrane:this.truckCrane, motorCycleCrane:this.motorCycleCrane, workshopCar:this.workshopCar, motorcicleWorkshop:this.motorcicleWorkshop};
    this.servicio.postServices(this.service).subscribe((data)=>{
      console.log(data);
      this.route.navigate(['services']);
    });
  }
}
