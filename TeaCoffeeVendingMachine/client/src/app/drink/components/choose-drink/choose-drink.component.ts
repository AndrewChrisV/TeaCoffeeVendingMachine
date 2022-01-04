import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ContainerService } from '../../../container/services/container.service';
import { DrinkService } from '../../services/drink.service';

@Component({
  selector: 'app-choose-drink',
  templateUrl: './choose-drink.component.html',
  styleUrls: ['./choose-drink.component.css'],
})
export class ChooseDrinkComponent implements OnInit {
  drink: any = {};
  message: string = '';
  numberOfCups: string;
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
    if (this.drink.cups == null || this.drink.cups == '') {
      this.message = '';
    } else if (
      this.drink.name == 'tea' &&
      (this.drink.cups * 0.006 > 1.89 ||
        //(this.drink.cups * 0.006 > this.container.tea ||
        this.drink.cups * 0.065 > 14.17 ||
        //this.drink.cups * 0.006 > this.container.water ||
        this.drink.cups * 0.044 > 14.39 ||
        //this.drink.cups * 0.006 > this.container.milk ||
        this.drink.cups * 0.017 > 7.91)
      //this.drink.cups * 0.017 > this.container.sugar)
    ) {
      this.message = 'Insufficient ingredients to create order';
    } else if (
      this.drink.name == 'black tea' &&
      (this.drink.cups * 0.006 > 1.89 ||
        //(this.drink.cups * 0.006 > this.container.tea ||
        this.drink.cups * 0.065 > 14.17 ||
        //this.drink.cups * 0.006 > this.container.water ||
        this.drink.cups * 0.017 > 7.91)
      //this.drink.cups * 0.017 > this.container.sugar)
    ) {
      this.message = 'Insufficient ingredients to create order';
    } else if (
      this.drink.name == 'coffee' &&
      (this.drink.cups * 0.006 > 2 ||
        //(this.drink.cups * 0.006 > this.container.coffee ||
        this.drink.cups * 0.065 > 14.17 ||
        //this.drink.cups * 0.006 > this.container.water ||
        this.drink.cups * 0.044 > 14.39 ||
        //this.drink.cups * 0.006 > this.container.milk ||
        this.drink.cups * 0.017 > 7.91)
      //this.drink.cups * 0.017 > this.container.sugar)
    ) {
      this.message = 'Insufficient ingredients to create order';
    } else if (
      this.drink.name == 'black coffee' &&
      (this.drink.cups * 0.006 > 2 ||
        //(this.drink.cups * 0.006 > this.container.coffee ||
        this.drink.cups * 0.065 > 14.17 ||
        //this.drink.cups * 0.006 > this.container.water ||
        this.drink.cups * 0.017 > 7.91)
      //this.drink.cups * 0.017 > this.container.sugar)
    ) {
      this.message = 'Insufficient ingredients to create order';
    } else {
      if (this.drink.cups == 1) {
        this.message =
          this.drink.cups + ' cup of ' + this.drink.name + ' produced';
      } else {
        this.message =
          this.drink.cups + ' cups of ' + this.drink.name + ' produced';
      }
      console.log(JSON.stringify(this.drink));
      this.drinkService.chooseDrink(this.drink).subscribe(
        (drink) => {},
        (err) => {
          this.err = err.error;
        }
      );
    }
  }
}
