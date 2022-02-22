import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    fileToUpload: File | null = null;

    ngOnInit(): void {
    
    }


    fileUploadInAngular(target: any) {
        console.log( target )
        
        
        //this.fileToUpload = files.item(0);
    }








}
