import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportOptionsComponent } from './components/report-options/report-options.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptors } from '../core/interceptor';
import { ReportService } from './services/report.service';
import { RefillingCounterStatusComponent } from './components/refilling-counter-status/refilling-counter-status.component';
import { SalesReportTodayComponent } from './components/sales-report-today/sales-report-today.component';
import { SalesReportAllDaysComponent } from './components/sales-report-all-days/sales-report-all-days.component';

@NgModule({
  declarations: [
    ReportOptionsComponent,
    RefillingCounterStatusComponent,
    SalesReportTodayComponent,
    SalesReportAllDaysComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule, ReportRoutingModule],
  providers: [httpInterceptors, ReportService],
})
export class ReportModule {}
