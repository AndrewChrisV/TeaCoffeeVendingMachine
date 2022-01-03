import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefillRoutingModule } from './refill-routing.module';
import { RefillFormComponent } from './components/refill-form/refill-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptors } from '../core/interceptor';
import { RefillService } from './services/refill.service';

@NgModule({
  declarations: [RefillFormComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, RefillRoutingModule],
  providers: [httpInterceptors, RefillService],
})
export class RefillModule {}
