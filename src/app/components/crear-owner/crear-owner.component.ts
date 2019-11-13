import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { OwnerInterface } from 'src/app/interfaces/owner-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-owner',
  templateUrl: './crear-owner.component.html',
  styleUrls: ['./crear-owner.component.css']
})
export class CrearOwnerComponent implements OnInit {

  name:string;
  identification:string;
  phoneNumber:string;
  residenceAddress:string;
  email:string;
  owner:OwnerInterface;


  constructor(private service:ApiServiceService, private route:Router) { }

  ngOnInit() {
  }

  crearOwner(){
    this.owner = { name:this.name, identification:this.identification, phoneNumber:this.phoneNumber
    ,residenceAddress: this.residenceAddress, email:this.email };

    this.service.postOwner(this.owner).subscribe((data:any)=>{
      console.log(data);
      this.route.navigate(['owners']);
    })
  }

}
