import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-report-options',
  templateUrl: './report-options.component.html',
  styleUrls: ['./report-options.component.css'],
})
export class ReportOptionsComponent implements OnInit {
  constructor(private reportService: ReportService, private router: Router) {}

  ngOnInit(): void {}
}
