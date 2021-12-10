import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';

import Swal  from 'sweetalert2'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ApplicationService {
    private token = sessionStorage.getItem('sessionToken')

    private headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Authorization', `Bearer ${this.token}`)


    constructor(
        private router: Router,
        private _http_client: HttpClient,
    ) {}


    // ===========================================================================================
    // ===================================== PERMISSIONS =========================================



    SwalSuccess(title: string){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: title,
            showConfirmButton: false,
            timer: 1500
        })
    }

    SwalDanger(title: string){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: title,
            showConfirmButton: false,
            timer: 1500
        })
    }


    SwalConfirmation(title: string, description: string){
        return Swal.fire({
            title: title,
            text: description,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar'
        })
        
    }



}
