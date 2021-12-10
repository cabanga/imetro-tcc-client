import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment'

//import Swal  from 'sweetalert2'

@Injectable({
    providedIn: 'root'
})

export class SiteService {
    
    constructor(
        private router: Router,
        private _http_client: HttpClient

    ) {}

    getProvinces() {
        return this._http_client.get<any>(
            `${environment.baseURL}/${environment._baseVersion}/provinces`
        )
    }

    getProvince(id: number) {
        return this._http_client.get<any>(
            `${environment.baseURL}/${environment._baseVersion}/provinces/${id}`
        )
    }

    createRequest(request: any) {
        return this._http_client.post<any>(
            `${environment.baseURL}/${environment._baseVersion}/requests`, 
            {request}
        )
    }

}

