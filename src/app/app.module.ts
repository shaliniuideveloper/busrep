import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusReportsComponent } from './components/bus-reports/bus-reports.component';
import {BusReportsService} from './services/bus-reports.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { CollapsibleModule } from 'angular2-collapsible';

import { BusCollapsibleComponent } from './components/bus-collapsible/bus-collapsible.component';
import { MatInputModule,MatFormFieldModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    BusReportsComponent,
    DataTableComponent,
    BusCollapsibleComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,  // <-- include required BrowserAnimationsModule
    CollapsibleModule, // <-- include angular2-collapsible module
    MatInputModule,
    MatFormFieldModule
    

  ],
  providers: [BusReportsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
