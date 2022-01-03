import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ContainerService } from '../../../container/services/container.service';
import { RefillService } from '../../services/refill.service';

@Component({
  selector: 'app-refill-form',
  templateUrl: './refill-form.component.html',
  styleUrls: ['./refill-form.component.css'],
})
export class RefillFormComponent implements OnInit {
  refill: any = {};
  //container: any = {};
  err: any = {};

  constructor(
    private refillService: RefillService,
    //private containerService: ContainerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /*
    this.containerService.getContainer().subscribe(
      (req) => {
        this.container = req;
        console.log(JSON.stringify(this.container));
      },
      (err) => {
        this.err = err.error;
      }
    );
    */
  }

  orderRefillSubmit() {
    console.log(JSON.stringify(this.refill));
    this.refillService.orderRefill(this.refill).subscribe(
      (refill) => {},
      (err) => {
        this.err = err.error;
      }
    );
    this.router.navigate(['/refill']);
  }
}
