import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './views/auth/auth.service';

@Component({
    selector: 'body',
    template: '<router-outlet></router-outlet>'
})

export class AppComponent {
	isLoggedIn: boolean = sessionStorage.getItem('sessionToken')? true : false

    constructor(
        private authService: AuthService,
        private router: Router
    ){
		if ( this.isLoggedIn ) {
            console.log( this.isLoggedIn )

			this.router.navigateByUrl('/dashboard')
		}
    }

    ngOnInit() {
        this.authService.showLayoutEmitter.subscribe(
            myShow => this.isLoggedIn = myShow
        )
        
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        })
    }

}
