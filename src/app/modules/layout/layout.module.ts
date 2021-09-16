import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component'; 



@NgModule({
  declarations: [
    MenuComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports : [
    MenuComponent,
    LoginComponent
  ]
})
export class LayoutModule { }
