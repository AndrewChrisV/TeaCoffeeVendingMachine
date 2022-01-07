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

  // Maximum capacities of containers
  maxTea: number = 2;
  maxCoffee: number = 2;
  maxSugar: number = 8;
  maxWater: number = 15;
  maxMilk: number = 15;

  constructor(
    private containerService: ContainerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.containerService.getContainer().subscribe(
      (req) => {
        // Get container from database
        this.container = req;
        // Display contents of container to console
        console.log(JSON.stringify(this.container));
      },
      (err) => {
        this.err = err.error;
      }
    );
  }
}
