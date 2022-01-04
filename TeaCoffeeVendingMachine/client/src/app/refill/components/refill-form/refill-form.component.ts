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
  message: string = '';
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
    if (this.refill.tea > 2 - 1.89) {
      //if (this.refill.tea > 2 - this.container.tea) {
      this.message =
        'You cannot order more than ' +
        (2 - 1.89).toFixed(3) +
        //(2 - this.container.tea) +
        ' kg of tea.';
    } else if (this.refill.coffee > 2 - 2) {
      //} else if (this.refill.coffee > 2 - this.container.coffee) {
      this.message =
        'You cannot order more than ' +
        (2 - 2).toFixed(3) +
        //(2 - this.container.coffee) +
        ' kg of coffee.';
    } else if (this.refill.sugar > 8 - 7.91) {
      //} else if (this.refill.sugar > 8 - this.container.sugar) {
      this.message =
        'You cannot order more than ' +
        (8 - 7.91).toFixed(3) +
        //(8 - this.container.sugar) +
        ' kg of sugar.';
    } else if (this.refill.water > 15 - 14.17) {
      //} else if (this.refill.water > 2 - this.container.water) {
      this.message =
        'You cannot order more than ' +
        (15 - 14.17).toFixed(3) +
        //(15 - this.container.water)
        ' liters of water.';
    } else if (this.refill.milk > 15 - 14.39) {
      //} else if (this.refill.milk > 15 - this.container.milk) {
      this.message =
        'You cannot order more than ' +
        (15 - 14.39).toFixed(3) +
        //(15 - this.container.milk)
        ' liters of milk.';
    } else {
      this.message = '';
      console.log(JSON.stringify(this.refill));
      this.refillService.orderRefill(this.refill).subscribe(
        (refill) => {},
        (err) => {
          this.err = err.error;
        }
      );
    }
  }
}
