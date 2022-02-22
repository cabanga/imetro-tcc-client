import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule
  ],
  declarations: [ DashboardComponent, FileUploadComponent ]
})
export class DashboardModule { }
