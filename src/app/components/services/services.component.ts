import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services:any[]= [];

  constructor(private servicio:ApiServiceService) { 
    this.obtenerServices();
  }

  ngOnInit() {
  }

  obtenerServices(){
    this.servicio.getServices().subscribe((data:any)=>{
      this.services = data;
      console.log(data);
    },(error)=>{
      console.log(error);
    });
  }

  eliminarService(index:number){
    this.servicio.deleteService(this.services[index].id).subscribe((data:any)=>{
      this.obtenerServices();
    });
    
  }

}
