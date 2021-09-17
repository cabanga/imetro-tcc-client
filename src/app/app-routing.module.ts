import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardComponent } from './modules/layout/dasboard/dasboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch : 'full'},
  { path: 'home', component: DasboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
