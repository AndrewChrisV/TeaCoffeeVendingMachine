import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinkRoutingModule } from './drink-routing.module';
import { ChooseDrinkComponent } from './components/choose-drink/choose-drink.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptors } from '../core/interceptor';
import { DrinkService } from './services/drink.service';

@NgModule({
  declarations: [ChooseDrinkComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, DrinkRoutingModule],
  providers: [httpInterceptors, DrinkService],
})
export class DrinkModule {}
