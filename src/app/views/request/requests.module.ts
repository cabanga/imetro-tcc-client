import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RequestsRoutingModule } from './requests-routing.module';
import { RequestComponent } from './request.component';
import { RequestListComponent } from './request-list/request-list.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RequestsRoutingModule
  ],
  declarations: [
    RequestComponent,
    RequestListComponent
  ]
})
export class RequestsModule {}
