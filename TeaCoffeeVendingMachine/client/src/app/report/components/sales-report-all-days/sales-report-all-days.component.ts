import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-sales-report-all-days',
  templateUrl: './sales-report-all-days.component.html',
  styleUrls: ['./sales-report-all-days.component.css'],
})
export class SalesReportAllDaysComponent implements OnInit {
  salesAllDays: any = {};
  err: any = {};

  constructor(private reportService: ReportService, private router: Router) {}

  ngOnInit(): void {
    this.reportService.getSalesAllDays().subscribe(
      (req) => {
        this.salesAllDays = req;
        console.log(JSON.stringify(this.salesAllDays));
      },
      (err) => {
        this.err = err.error;
      }
    );
  }
}
