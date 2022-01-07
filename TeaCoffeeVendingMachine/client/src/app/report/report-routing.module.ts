import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefillingCounterStatusComponent } from './components/refilling-counter-status/refilling-counter-status.component';
import { ReportOptionsComponent } from './components/report-options/report-options.component';
import { SalesReportAllDaysComponent } from './components/sales-report-all-days/sales-report-all-days.component';
import { SalesReportTodayComponent } from './components/sales-report-today/sales-report-today.component';

const routes: Routes = [
  // Report Options
  {
    path: '',
    component: ReportOptionsComponent,
  },
  // Sales Report for all days
  {
    path: 'all-days-sales',
    component: SalesReportAllDaysComponent,
  },
  // Sales Report for today
  {
    path: 'today-sales',
    component: SalesReportTodayComponent,
  },
  // Refilling Counter
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
