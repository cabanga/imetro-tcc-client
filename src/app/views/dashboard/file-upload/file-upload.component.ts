import { ApplicationService } from 'src/app/api/application.service';
import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';

import * as hasha from 'hasha';


@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})

export class FileUploadComponent implements OnInit {

    fileToUpload: File | null = null;

    constructor(
        private _applicationService: ApplicationService
    ) { }

    ngOnInit(): void {

    }

    fileUploadInAngular(target: any) {
        this.fileToUpload = target.files.item(0)
        this._applicationService.SwalConfirmationUpload()
        .then((result) => {
            if (result.isConfirmed) {
                //==== TODO Confirmação do Backend para criar buscar o Hash
                //this._confirmationUpload()
                
                let filepath = './loadingFile/certificado-tcc-Imetro.pdf'
                const hash_file = hasha.fromFileSync(filepath, {algorithm: 'sha256'});
                
                console.log( hash_file )
            }
        })
    }

    _confirmationUpload(){
        if (this.fileToUpload && this.fileToUpload.size > 0) {
            let url = `${environment.baseURL}/upload_document`

            this._applicationService.postFile(this.fileToUpload, url)
            .subscribe( response => {
                this._applicationService.SwalSuccess('Ficheiro carregado com sucesso')
            }, error => {
                console.log(error)
            })
        }
        
    }

}
