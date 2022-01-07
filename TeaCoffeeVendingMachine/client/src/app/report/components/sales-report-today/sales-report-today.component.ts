import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-sales-report-today',
  templateUrl: './sales-report-today.component.html',
  styleUrls: ['./sales-report-today.component.css'],
})
export class SalesReportTodayComponent implements OnInit {
  salesToday: any = {};
  err: any = {};

  // prices (in Rs.) per cup of each type of drink
  costTea: number = 10;
  costBlackTea: number = 5;
  costCoffee: number = 15;
  costBlackCoffee: number = 10;

  constructor(private reportService: ReportService, private router: Router) {}

  ngOnInit(): void {
    this.reportService.getSalesToday().subscribe(
      (req) => {
        // Get sales report for today from database
        this.salesToday = req;
        // Display contents of report to console
        console.log(JSON.stringify(this.salesToday));
      },
      (err) => {
        this.err = err.error;
      }
    );
  }
}
