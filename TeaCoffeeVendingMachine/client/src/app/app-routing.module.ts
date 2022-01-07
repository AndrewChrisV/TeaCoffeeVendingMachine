import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/components/layout/landing/landing.component';

const routes: Routes = [
  // Landing page (which redirects to home page)
  { path: '', component: LandingComponent },
  // Home (Choose Drink) page
  {
    path: 'home',
    loadChildren: () =>
      import('./drink/drink.module').then((m) => m.DrinkModule),
  },
  // Refilling Form page
  {
    path: 'refill',
    loadChildren: () =>
      import('./refill/refill.module').then((m) => m.RefillModule),
  },
  // Report Options page
  {
    path: 'report',
    loadChildren: () =>
      import('./report/report.module').then((m) => m.ReportModule),
  },
  // Container Status page
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
