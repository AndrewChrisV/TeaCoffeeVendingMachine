import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerStatusComponent } from './components/container-status/container-status.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerStatusComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContainerRoutingModule {}
