import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/api/application.service';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user: any = {
        email: null,
        password: null
    }

    constructor(
        private _authService: AuthService,
        private _applicationService: ApplicationService

    ) { }

    ngOnInit(): void {
    }

    _signIn(){
        if (this.user.email == null) {
            this._applicationService.SwalDanger("O campo E-mail é obrigatório")
            return
        }

        if (this.user.password == null) {
            this._applicationService.SwalDanger("O campo Senha é obrigatório")
            return
        }

        this._authService.signIn(this.user)
    }

}
