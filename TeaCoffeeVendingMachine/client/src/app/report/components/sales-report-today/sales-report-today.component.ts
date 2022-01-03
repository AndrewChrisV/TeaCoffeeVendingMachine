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

  constructor(private reportService: ReportService, private router: Router) {}

  ngOnInit(): void {
    this.reportService.getSalesToday().subscribe(
      (req) => {
        this.salesToday = req;
        console.log(JSON.stringify(this.salesToday));
      },
      (err) => {
        this.err = err.error;
      }
    );
  }
}
