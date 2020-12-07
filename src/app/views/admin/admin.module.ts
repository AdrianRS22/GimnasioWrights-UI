import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';

import { DataTablesModule } from 'angular-datatables';

import { AdminComponent } from './admin.component';
import { LayoutModule } from '../shared/layout/layout.module';

@NgModule({
    declarations: [AdminComponent],
    imports: [
      CommonModule,
      AdminRoutingModule,
      LayoutModule,
      DataTablesModule
    ]
  })
  export class AdminModule { }
