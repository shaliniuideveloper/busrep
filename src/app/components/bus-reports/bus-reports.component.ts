import { Component, OnInit } from '@angular/core';
import {BusReportsService} from '../../services/bus-reports.service';
//import {DataTableComponent} from '../data-table/data-table.component';
@Component({
  selector: 'app-bus-reports',
  templateUrl: './bus-reports.component.html',
  styleUrls: ['./bus-reports.component.less'],
  providers:[BusReportsService]
})
export class BusReportsComponent implements OnInit {
  busData:{};
  constructor(private busReportsService:BusReportsService) { }

  ngOnInit() {
    this.busReportsService.getBusReports().subscribe((res)=>{
      console.log("BusReportsres",res);
      this.busData = res ;
      console.log("BusReportsBusData",this.busData);

    });
  }

}
