import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})

export class FileUploadComponent implements OnInit {

    fileToUpload: File | null = null;

    constructor() { }

    ngOnInit(): void {

    }

    fileUploadInAngular(target: any) {

        console.log( target.files.item(0) )


        this.fileToUpload = target.files.item(0)




    }

}
