import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuComponent,
    LoginComponent,
    DasboardComponent,
    TopMenuComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  exports : [
    MenuComponent,
    LoginComponent,
    DasboardComponent,
    TopMenuComponent

  ]
})
export class LayoutModule { }
