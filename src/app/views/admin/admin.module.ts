import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';

import { AdminComponent } from './admin.component';
import { LayoutModule } from '../shared/layout/layout.module';

@NgModule({
    declarations: [AdminComponent],
    imports: [
      CommonModule,
      AdminRoutingModule,
      LayoutModule
    ]
  })
  export class AdminModule { }
