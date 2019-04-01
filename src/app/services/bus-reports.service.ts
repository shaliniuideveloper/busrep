import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BusServices} from '../../data/bus-services';
//import {BusServiceData} from '../../data/bus-services-data';
@Injectable({
  providedIn: 'root'
})
export class BusReportsService {
  apiURL:string='./assets';


  constructor(private httpClient:HttpClient) {}
  public getBusReports(){
    return this.httpClient.get<BusServices>(`${this.apiURL}/bus-services-data`+`.json`); 
  }
}
