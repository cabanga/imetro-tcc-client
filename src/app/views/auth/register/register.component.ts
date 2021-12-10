import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    user: any = {
        cell_phone: null,
        password: null,
        password_confirmation: null
    }

    constructor(
        private _authService: AuthService
    ) { }

    ngOnInit(): void {
    }

    _signUp(){
        this._authService.signUp({user: this.user})
    }

}
