import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { AuthService } from './auth.service'
import { AuthRoutingModule } from './auth.routing.module'
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component'


@NgModule({

    declarations: [
        RegisterComponent,
        LoginComponent       
    ],
    exports: [
        
    ],
    imports: [
        FormsModule,
        CommonModule,
        AuthRoutingModule
    ],
    providers: [AuthService]
})
export class AuthModule {}