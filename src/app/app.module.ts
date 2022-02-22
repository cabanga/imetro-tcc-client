import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { LayoutModule } from './views/layout/layout.module'
import { AuthService } from './views/auth/auth.service';
import { NotFoundComponentComponent } from './views/layout/not-found-component/not-found-component.component';

import { AppComponent } from './app.component'
import { DefaultLayoutComponent } from './containers'
import { NavbarSideComponent } from './containers/default-layout/navbar-side/navbar-side.component';
import { SidebarComponent } from './containers/default-layout/sidebar/sidebar.component';



const APP_CONTAINERS = [
    DefaultLayoutComponent
  ];

@NgModule({
    declarations: [
        AppComponent,
        ...APP_CONTAINERS,
        NavbarSideComponent,
        SidebarComponent,
        NotFoundComponentComponent,
       
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        LayoutModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
