import { ApplicationService } from 'src/app/api/application.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})

export class PaymentComponent implements OnInit {

    current_document: any

    constructor(
        private _applicationService: ApplicationService
    ) { }

    ngOnInit(): void {
        this.get_document_info()

    }

    _confirmationPayment(){
        this._applicationService.SwalConfirmationPayment()
        .then((result) => {
            if (result.isConfirmed) {
                // =============== INSERT IN BLOCKCHAIN =======
            }
        })
    }

    public get_document_info(){
        let storage_info : any = sessionStorage.getItem('current_document')
        this.current_document = JSON.parse(storage_info)
    }

}
