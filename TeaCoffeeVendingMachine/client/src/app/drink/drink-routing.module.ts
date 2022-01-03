import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseDrinkComponent } from './components/choose-drink/choose-drink.component';

const routes: Routes = [
  {
    path: '',
    component: ChooseDrinkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrinkRoutingModule {}
