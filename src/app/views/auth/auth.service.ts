import { Injectable, EventEmitter } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Router } from '@angular/router'
import { ApplicationService } from 'src/app/api/application.service'
import { environment } from 'src/environments/environment'

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    showLayoutEmitter = new EventEmitter<boolean>()
    private userLogged = false
    private headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

    //private token = sessionStorage.getItem('sessionToken')

    constructor(
        private router: Router,
        private _http_client: HttpClient,
        private _applicationService: ApplicationService
    ){ }
    
    signIn(user: any){
        this._http_client.post<any>(
            `${environment.baseURL}/users/sign_in`, 
            user
        ).subscribe(
            response => {
                let token = response.data.token
                sessionStorage.setItem('sessionToken', token);
                sessionStorage.setItem('currentUser', JSON.stringify(response.data.user) );

                this.userLogged = true
                this.showLayoutEmitter.emit(true)
                
                this._applicationService.SwalSuccess('Sessão iniciada com sucesso')
                this.router.navigateByUrl('/dashboard')
            },
            (error) => {
                if (!error.ok) {
                    this.userLogged = false
                    this.showLayoutEmitter.emit(false)
                    this._applicationService.SwalDanger('Senha ou e-mail invalido')
                    this.router.navigate(['/auth/login'])
                }
            }
        )
    }

    signUp(user: any){
        this._http_client.post<any>(
            `${environment.baseURL}/users`, 
            user
        ).subscribe(
            response => {
                let token = response.data.authentication_token
                sessionStorage.setItem('sessionToken', token);

                this.userLogged = true
                this.showLayoutEmitter.emit(true)
                
                this._applicationService.SwalSuccess('Registo realizado com sucesso')
                this.router.navigateByUrl(`/auth/update-account/${response.data.id}`)
            },
            (error) => {
                if (!error.ok) {
                    this.userLogged = false
                    this.showLayoutEmitter.emit(false)

                    this._applicationService.SwalDanger('O seu registo falhou')
                }
            }
        )
    }

    public current_user(): any {
        let data: any = sessionStorage.getItem('currentUser') 
        let response = JSON.parse(data)
        return response
    }

    removeTokenOfUser(){
        sessionStorage.removeItem('currentUser')
        sessionStorage.removeItem('sessionToken')
        this.userLogged = false
        this.showLayoutEmitter.emit(false)
        this.router.navigateByUrl('/')
    }

}