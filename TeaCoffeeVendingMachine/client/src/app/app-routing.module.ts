import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/components/layout/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'home',
    loadChildren: () =>
      import('./drink/drink.module').then((m) => m.DrinkModule),
  },
  {
    path: 'refill',
    loadChildren: () =>
      import('./refill/refill.module').then((m) => m.RefillModule),
  },
  {
    path: 'report',
    loadChildren: () =>
      import('./report/report.module').then((m) => m.ReportModule),
  },
  {
    path: 'container-status',
    loadChildren: () =>
      import('./container/container.module').then((m) => m.ContainerModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
