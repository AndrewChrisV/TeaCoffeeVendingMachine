import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ContainerService } from '../../../container/services/container.service';
import { RefillService } from '../../services/refill.service';

// maximum capacities of each container
const maxTea: number = 2;
const maxCoffee: number = 2;
const maxSugar: number = 8;
const maxWater: number = 15;
const maxMilk: number = 15;

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

  // maximum capacities of each container (to display on page)
  maxTeaCapacity: number = maxTea;
  maxCoffeeCapacity: number = maxCoffee;
  maxSugarCapacity: number = maxSugar;
  maxWaterCapacity: number = maxWater;
  maxMilkCapacity: number = maxMilk;

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
    // Change any blank inputs to 0
    if (this.refill.tea == null || this.refill.tea == '') this.refill.tea = 0;
    if (this.refill.coffee == null || this.refill.coffee == '')
      this.refill.coffee = 0;
    if (this.refill.sugar == null || this.refill.sugar == '')
      this.refill.sugar = 0;
    if (this.refill.water == null || this.refill.water == '')
      this.refill.water = 0;
    if (this.refill.milk == null || this.refill.milk == '')
      this.refill.milk = 0;

    // Check that input values are nonnegative numbers
    if (isNaN(this.refill.tea) || this.refill.tea < 0)
      this.message = 'Please enter legitimate value for tea.';
    else if (isNaN(this.refill.coffee) || this.refill.coffee < 0)
      this.message = 'Please enter legitimate value for coffee.';
    else if (isNaN(this.refill.sugar) || this.refill.sugar < 0)
      this.message = 'Please enter legitimate value for sugar.';
    else if (isNaN(this.refill.water) || this.refill.water < 0)
      this.message = 'Please enter legitimate value for water.';
    else if (isNaN(this.refill.milk) || this.refill.milk < 0)
      this.message = 'Please enter legitimate value for milk.';
    // Do not submit an empty refill order
    else if (
      this.refill.tea == 0 &&
      this.refill.coffee == 0 &&
      this.refill.sugar == 0 &&
      this.refill.water == 0 &&
      this.refill.milk == 0
    )
      this.message = '';
    // Prevent ordering too much tea
    else if (this.refill.tea > maxTea - 1.89) {
      //if (this.refill.tea > maxTea - this.container.tea) {
      this.message =
        'You cannot order more than ' +
        (maxTea - 1.89).toFixed(3) +
        //(maxTea - this.container.tea) +
        ' kg of tea.';
      // Prevent ordering too much coffee
    } else if (this.refill.coffee > maxCoffee - 2) {
      //} else if (this.refill.coffee > maxCoffee - this.container.coffee) {
      this.message =
        'You cannot order more than ' +
        (maxCoffee - 2).toFixed(3) +
        //(maxCoffee - this.container.coffee) +
        ' kg of coffee.';
      // Prevent ordering too much sugar
    } else if (this.refill.sugar > maxSugar - 7.91) {
      //} else if (this.refill.sugar > maxSugar - this.container.sugar) {
      this.message =
        'You cannot order more than ' +
        (maxSugar - 7.91).toFixed(3) +
        //(maxSugar - this.container.sugar) +
        ' kg of sugar.';
      // Prevent ordering too much water
    } else if (this.refill.water > maxWater - 14.17) {
      //} else if (this.refill.water > maxWater - this.container.water) {
      this.message =
        'You cannot order more than ' +
        (maxWater - 14.17).toFixed(3) +
        //(maxWater - this.container.water)
        ' liters of water.';
      // Prevent ordering too much milk
    } else if (this.refill.milk > maxMilk - 14.39) {
      //} else if (this.refill.milk > maxMilk - this.container.milk) {
      this.message =
        'You cannot order more than ' +
        (maxMilk - 14.39).toFixed(3) +
        //(maxMilk - this.container.milk)
        ' liters of milk.';
    } else {
      this.message = '';
      // Display refill order in console
      console.log(JSON.stringify(this.refill));
      // Submit refill to database
      this.refillService.orderRefill(this.refill).subscribe(
        (refill) => {},
        (err) => {
          this.err = err.error;
        }
      );
    }
  }
}
