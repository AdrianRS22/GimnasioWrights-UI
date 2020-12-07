import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

let routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ViewRoutingModule {}