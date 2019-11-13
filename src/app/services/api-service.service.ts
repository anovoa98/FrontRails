import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { OwnerInterface } from '../interfaces/owner-interface';
import { ServiceInterface } from '../interfaces/service-interface';
import { VehicleInterface } from '../interfaces/vehicle-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getOwners(){
    let url='http://localhost:3000/owners';
    return this.http.get(url);
  }

  postOwner(owner:OwnerInterface){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    let url = 'http://localhost:3000/owners';
    return this.http.post(url, owner, {headers});
  }

  deleteOwner(index:number){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    let url = `http://localhost:3000/owners/${index}`;
    return this.http.delete(url);
  }

  getServices(){
    let url='http://localhost:3000/services';
    return this.http.get(url);
  }

  postServices(service:ServiceInterface){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    let url = 'http://localhost:3000/services';
    return this.http.post(url, service, {headers});
  }

  deleteService(index:number){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    let url = 'http://localhost:3000/services/'+index;
    return this.http.delete(url, {headers});
  }

  getVehicles(){
    let url='http://localhost:3000/vehicles';
    return this.http.get(url);
  }

  postVehicles(vehicle:VehicleInterface){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    let url = 'http://localhost:3000/vehicles';
    return this.http.post(url, vehicle, {headers});
  }

  deleteVehicle(index:number){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    let url = 'http://localhost:3000/vehicles/'+index;
    return this.http.delete(url, {headers});
  }
}
