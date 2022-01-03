import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefillFormComponent } from './components/refill-form/refill-form.component';

const routes: Routes = [
  {
    path: '',
    component: RefillFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefillRoutingModule {}
