import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestComponent } from './request.component';


const routes: Routes = [
    {
        path: '',
        component: RequestComponent,
        data: { title: 'Agendamentos' },
        children: [
            {
                path: 'lista',
                component: RequestListComponent
            }


            
        ]
    }
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RequestsRoutingModule { }
