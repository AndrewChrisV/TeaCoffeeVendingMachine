import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefillingCounterStatusComponent } from './components/refilling-counter-status/refilling-counter-status.component';
import { ReportOptionsComponent } from './components/report-options/report-options.component';
import { SalesReportAllDaysComponent } from './components/sales-report-all-days/sales-report-all-days.component';
import { SalesReportTodayComponent } from './components/sales-report-today/sales-report-today.component';

const routes: Routes = [
  {
    path: '',
    component: ReportOptionsComponent,
  },
  {
    path: 'all-days-sales',
    component: SalesReportAllDaysComponent,
  },
  {
    path: 'today-sales',
    component: SalesReportTodayComponent,
  },
  {
    path: 'refilling-counter',
    component: RefillingCounterStatusComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
