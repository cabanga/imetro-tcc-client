import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule
  ],
  declarations: [ DashboardComponent, FileUploadComponent, PaymentComponent ]
})
export class DashboardModule { }
