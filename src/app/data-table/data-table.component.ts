import { Component, OnInit, OnChanges, ViewChild,Input, SimpleChanges} from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableDataSource } from './data-table-datasource';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit,OnChanges {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() data:[];
  dataSource: DataTableDataSource;
  busRecords :[];
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['busId', 'routeVariant','deviationFromTimeTable'];

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "busData" changed
    if (changes['data']) {
      console.log("this.data",this.data);
        this.busRecords = this.data;
        console.log("s",this.data);
        console.log("t",this.busRecords);

    }
  }
  ngOnInit() {
    console.log("Dat inside data-table",this.busRecords);
    this.dataSource = new DataTableDataSource(this.paginator, this.sort,this.busRecords);
  }
}
