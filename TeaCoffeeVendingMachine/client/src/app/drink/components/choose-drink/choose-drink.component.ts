import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrinkService } from '../../services/drink.service';

@Component({
  selector: 'app-choose-drink',
  templateUrl: './choose-drink.component.html',
  styleUrls: ['./choose-drink.component.css'],
})
export class ChooseDrinkComponent implements OnInit {
  drink: any = {};
  err: any = {};

  constructor(private drinkService: DrinkService, private router: Router) {}

  ngOnInit(): void {}

  chooseDrinkSubmit() {
    console.log(JSON.stringify(this.drink));
    this.drinkService.chooseDrink(this.drink).subscribe(
      (drink) => {},
      (err) => {
        this.err = err.error;
      }
    );
    this.router.navigate(['/home']);
  }
}
