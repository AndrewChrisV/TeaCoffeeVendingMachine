import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerStatusComponent } from './components/container-status/container-status.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptors } from '../core/interceptor';
import { ContainerService } from './services/container.service';

@NgModule({
  declarations: [ContainerStatusComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ContainerRoutingModule,
  ],
  providers: [httpInterceptors, ContainerService],
})
export class ContainerModule {}
