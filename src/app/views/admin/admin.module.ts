import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DataTablesModule } from 'angular-datatables';

import { AdminComponent } from './admin.component';
import { SociosComponent } from './socios/socios.component';

import { LayoutModule } from '../shared/layout/layout.module';

@NgModule({
    declarations: [AdminComponent, SociosComponent],
    imports: [
      CommonModule,
      AdminRoutingModule,
      LayoutModule,
      DataTablesModule,
      BsDropdownModule.forRoot()
    ]
  })
  export class AdminModule { }
