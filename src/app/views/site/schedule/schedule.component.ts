import { Component, OnInit } from '@angular/core'
import { CalendarOptions } from '@fullcalendar/angular'
import ptLocale from '@fullcalendar/core/locales/pt';
import { ApplicationService } from 'src/app/api/application.service';
import Swal  from 'sweetalert2'
import * as moment from 'moment'
import { Router } from '@angular/router';
import { SiteService } from '../schedules.service';


@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent implements OnInit {

    _provinces: any = []
    _agencies: any = []
    can_pass: boolean = true

    request: any = {
        day_at: '',
        full_name: '',
        bi: '',
        pass_port: '',
        cell_phone: '',
        email: '',
        agency_id: ''
    }

    constructor(
        private router: Router,
        private _siteService: SiteService,
        private _applicationService: ApplicationService
    ) {}

    titleFormat: any = {
        month: 'short',
        year: '2-digit',
        day: '2-digit',      
    }

    Events = [
        { title: 'Ocupado', date: '2021-12-01' },
        { title: 'Ocupado', date: '2021-12-02' },
        { title: 'Ocupado', date: '2021-12-05' },
        { title: 'Ocupado', date: '2021-12-10' }
    ]

    calendarOptions: CalendarOptions = {
        locale: ptLocale,
        buttonText: {
            today: 'Hoje',
            month: 'Mês',
            week: 'Semana',
            day: 'Hoje',
            list: 'Lista'
        },
        titleFormat: this.titleFormat,
        initialView: 'timeGridWeek',
        events: this.Events,
        dateClick: this.handleDateClick.bind(this)
    }

    ngOnInit(): void {
        this._loadingDependences()
    }

    handleDateClick(arg: any) {
        let data = moment(arg.dateStr).format("DD/MM/YYYY")
        let hora = moment(arg.dateStr).format("HH:mm")

        this._applicationService.SwalConfirmation(`data : ${data} as ${hora}`, 'Por favor confirmar o agendamento')
        .then((result) => {
            if (result.isConfirmed) {
                this.request.day_at = arg.dateStr
                Swal.fire(
                    'Data e hora do Agendamento',
                    'Confirmado',
                    'success'
                ).then((result) => {
                    if (result.isConfirmed) {
                        this._create_schedule()
                    }
                })
            }
        })
    }
    
    _create_schedule(){
        if (this.request.cell_phone == '') {
            this._applicationService.SwalDanger("O campo Nº telefone é obrigatório")
            return
        }

        if (this.request.email == '') {
            this._applicationService.SwalDanger("O campo E-amil é obrigatório")
            return
        }

        if (this.request.day_at == '') {
            this._applicationService.SwalDanger("Por favor Selecione o dia e hora")
            return
        }
        
        this._siteService.createRequest(this.request)
        .subscribe(
            response => {  
                this._applicationService.SwalSuccess('Agendamento feito com sucesso')
                this.router.navigateByUrl('/')
            },
            (error) => {
                if (!error.ok) {
                    this._applicationService.SwalDanger('Ops! algo correu mal')
                }
            }
        )
    }

    _loadingDependences(){
        this._siteService.getProvinces()
        .subscribe(
            response => {
                this._provinces = response
            }
        )
    }

    _changeProvince(event: any){
        let province_id = event.target.value
        this._siteService.getProvince(province_id)
        .subscribe(
            response => {
                this._agencies = response.agencies
            }
        )
    }

}
