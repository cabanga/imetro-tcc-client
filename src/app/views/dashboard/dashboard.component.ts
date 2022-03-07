import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

	isLoggedIn: boolean = sessionStorage.getItem('sessionToken')? true : false

    constructor(
        private authService: AuthService,
        private router: Router
    ){
		if ( !this.isLoggedIn ) {
			this.router.navigateByUrl('/')
		}
    }
    
    ngOnInit(): void {
        this.authService.showLayoutEmitter.subscribe(
            myShow => this.isLoggedIn = myShow
        )
    }



}
