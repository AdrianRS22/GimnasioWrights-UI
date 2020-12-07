import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { DataTablesModule } from 'angular-datatables';

import { AdminComponent } from './admin.component';
import { SociosComponent } from './socios/socios.component';

import { LayoutModule } from '../shared/layout/layout.module';
import { ControlasistenciaComponent } from './controlasistencia/controlasistencia.component';

@NgModule({
    declarations: [AdminComponent, SociosComponent, ControlasistenciaComponent],
    imports: [
      CommonModule,
      AdminRoutingModule,
      LayoutModule,
      DataTablesModule,
      BsDropdownModule.forRoot(),
      ModalModule.forRoot()
    ]
  })
  export class AdminModule { }
