import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-refilling-counter-status',
  templateUrl: './refilling-counter-status.component.html',
  styleUrls: ['./refilling-counter-status.component.css'],
})
export class RefillingCounterStatusComponent implements OnInit {
  counter: any = {};
  err: any = {};

  constructor(private reportService: ReportService, private router: Router) {}

  ngOnInit(): void {
    this.reportService.getCounter().subscribe(
      (req) => {
        this.counter = req;
        console.log(JSON.stringify(this.counter));
      },
      (err) => {
        this.err = err.error;
      }
    );
  }
}
