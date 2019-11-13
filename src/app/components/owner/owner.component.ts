import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  owners:any[] = [];

  constructor(private servicio: ApiServiceService) {
    this.obtenerOwners();
   }

  ngOnInit() {
  }

  obtenerOwners(){
    this.servicio.getOwners().subscribe((data:any)=>{
      this.owners = data;
    },(servicioError)=>{
      console.log(servicioError.error.error.message);
    });
  }

  eliminarOwner(index:number){
    this.servicio.deleteOwner(this.owners[index].id).subscribe((data:any)=>{
      this.obtenerOwners();
    },(error)=>{
      console.log(error.error.error.message);
    });
    
  }



}
