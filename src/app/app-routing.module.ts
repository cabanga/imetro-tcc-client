import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './containers';
import { NotFoundComponentComponent } from './views/layout/not-found-component/not-found-component.component';



export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./views/site/site.module').then(m => m.SiteModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '',  component: DefaultLayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
            }
        ]
    },
    {
        path: '**', 
        component: NotFoundComponentComponent
    }
]







@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}