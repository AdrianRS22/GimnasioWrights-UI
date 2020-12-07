import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

import { SociosComponent } from './socios/socios.component';
import { PagosventasComponent } from './pagosventas/pagosventas.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { ProductosComponent } from './productos/productos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { RutinasComponent } from './rutinas/rutinas.component';
import { ControlasistenciaComponent } from './controlasistencia/controlasistencia.component';


const routes: Routes = [
    {
        path: '', component: AdminComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'socios' },
            { path: 'socios', component:  SociosComponent },
            { path: 'pagosyventas', component: PagosventasComponent },
            { path: 'mantenimiento', component: MantenimientoComponent },
            { path: 'productos', component: ProductosComponent },
            { path: 'reportes', component: ReportesComponent },
            { path: 'rutinas', component: RutinasComponent},
            { path: 'control-asistencia/:id', component: ControlasistenciaComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
