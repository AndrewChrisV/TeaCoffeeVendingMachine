import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContainerService } from '../../services/container.service';

@Component({
  selector: 'app-container-status',
  templateUrl: './container-status.component.html',
  styleUrls: ['./container-status.component.css'],
})
export class ContainerStatusComponent implements OnInit {
  container: any = {};
  err: any = {};

  constructor(
    private containerService: ContainerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.containerService.getContainer().subscribe(
      (req) => {
        this.container = req;
        console.log(JSON.stringify(this.container));
      },
      (err) => {
        this.err = err.error;
      }
    );
  }
}
