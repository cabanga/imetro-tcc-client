import { NgModule } from "@angular/core";
import { ListagemClientesComponent } from "./clientes/listagem/listagem-clientes.component";
import { CriarEditarClientesComponent } from './clientes/criar-editar-clientes/criar-editar-clientes.component';


@NgModule({
    declarations: [
        ListagemClientesComponent,
        CriarEditarClientesComponent
    ],
    exports : [ListagemClientesComponent]
})
export class CRMModule { }