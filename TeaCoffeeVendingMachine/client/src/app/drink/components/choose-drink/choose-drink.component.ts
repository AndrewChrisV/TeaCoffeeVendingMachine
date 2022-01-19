import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ContainerService } from '../../../container/services/container.service';
import { DrinkService } from '../../services/drink.service';

// amounts of each ingredient in one cup
const teaPerCup: number = 0.006;
const coffeePerCup: number = 0.006;
const waterPerCup: number = 0.065;
const milkPerCup: number = 0.044;
const sugarPerCup: number = 0.017;

@Component({
  selector: 'app-choose-drink',
  templateUrl: './choose-drink.component.html',
  styleUrls: ['./choose-drink.component.css'],
})
export class ChooseDrinkComponent implements OnInit {
  drink: any = {};
  message: string = '';
  //container: any = {};
  err: any = {};

  constructor(
    private drinkService: DrinkService,
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

  chooseDrinkSubmit() {
    // Is number of cups a positive integer?
    if (
      isNaN(this.drink.cups) ||
      this.drink.cups <= 0 ||
      this.drink.cups % 1 != 0
    ) {
      // If not, do not submit order; display error message
      this.message = 'Please enter legitimate value';
    } else if (
      // Are there enough ingredients to fulfill an order for tea?
      this.drink.name == 'tea' &&
      (this.drink.cups * teaPerCup > 1.89 ||
        //(this.drink.cups * teaPerCup > this.container.tea ||
        this.drink.cups * waterPerCup > 14.17 ||
        //this.drink.cups * waterPerCup > this.container.water ||
        this.drink.cups * milkPerCup > 14.39 ||
        //this.drink.cups * milkPerCup > this.container.milk ||
        this.drink.cups * sugarPerCup > 7.91)
      //this.drink.cups * sugarPerCup > this.container.sugar)
    ) {
      // If not, do not submit order; display error message
      this.message = 'Insufficient ingredients to fulfill order';
    } else if (
      // Are there enough ingredients to fulfill an order for black tea?
      this.drink.name == 'black tea' &&
      (this.drink.cups * teaPerCup > 1.89 ||
        //(this.drink.cups * teaPerCup > this.container.tea ||
        this.drink.cups * waterPerCup > 14.17 ||
        //this.drink.cups * waterPerCup > this.container.water ||
        this.drink.cups * sugarPerCup > 7.91)
      //this.drink.cups * sugarPerCup > this.container.sugar)
    ) {
      // If not, do not submit order; display error message
      this.message = 'Insufficient ingredients to fulfill order';
    } else if (
      // Are there enough ingredients to fulfill an order for coffee?
      this.drink.name == 'coffee' &&
      (this.drink.cups * coffeePerCup > 2 ||
        //(this.drink.cups * coffeePerCup > this.container.coffee ||
        this.drink.cups * waterPerCup > 14.17 ||
        //this.drink.cups * waterPerCup > this.container.water ||
        this.drink.cups * milkPerCup > 14.39 ||
        //this.drink.cups * milkPerCup > this.container.milk ||
        this.drink.cups * sugarPerCup > 7.91)
      //this.drink.cups * sugarPerCup > this.container.sugar)
    ) {
      // If not, do not submit order; display error message
      this.message = 'Insufficient ingredients to fulfill order';
    } else if (
      // Are there enough ingredients to fulfill an order for black coffee?
      this.drink.name == 'black coffee' &&
      (this.drink.cups * coffeePerCup > 2 ||
        //(this.drink.cups * coffeePerCup > this.container.coffee ||
        this.drink.cups * waterPerCup > 14.17 ||
        //this.drink.cups * waterPerCup > this.container.water ||
        this.drink.cups * sugarPerCup > 7.91)
      //this.drink.cups * sugarPerCup > this.container.sugar)
    ) {
      // If not, do not submit order; display error message
      this.message = 'Insufficient ingredients to fulfill order';
    } else {
      // Create message stating drink order
      if (this.drink.cups == 1) {
        this.message = '1 cup of ' + this.drink.name + ' produced';
      } else {
        this.message =
          this.drink.cups + ' cups of ' + this.drink.name + ' produced';
      }
      // Display drink order in console
      console.log(JSON.stringify(this.drink));
      // Submit drink to database
      this.drinkService.chooseDrink(this.drink).subscribe(
        (drink) => {},
        (err) => {
          this.err = err.error;
        }
      );
    }
  }
}
