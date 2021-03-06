import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/api/application.service'
import { environment } from './../../../../environments/environment'
import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})

export class FileUploadComponent implements OnInit {
    fileToUpload: File | null = null

    constructor(
        private router: Router,
        private _applicationService: ApplicationService
    ) { }

    ngOnInit(): void {

    }

    async fileUploadInAngular(event: any) {
        this.fileToUpload = event.target.files.item(0)
       
        this._applicationService.SwalConfirmationUpload()
        .then((result) => {
            if (result.isConfirmed) {
                //==== TODO Confirmação do Backend para criar buscar o Hash
                this._confirmationUpload()
            }
        })
    }

    _confirmationUpload(){
        if (this.fileToUpload && this.fileToUpload.size > 0) {
            let url = `${environment.baseURL}/file/upload_document`

            this._applicationService.postFile(this.fileToUpload, url)
            .subscribe( response => {
                let result = Object(response).body

                if (Boolean( result )) {
                    this._save_info_document(result)
                }

                this._applicationService.SwalSuccess('Ficheiro carregado com sucesso')
            }, error => {
                console.log(error)
            })
            
        }
    }

    _save_info_document(data: any){
        sessionStorage.setItem('current_document', JSON.stringify(data))
        this.router.navigateByUrl('/dashboard/payment')
    }

}
