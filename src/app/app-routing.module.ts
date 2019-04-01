import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusReportsComponent } from './components/bus-reports/bus-reports.component';

const routes: Routes = [{path: '',component: BusReportsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
