import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CabeceraComponent } from './cabecera/cabecera.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        CabeceraComponent,
        SidebarComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        CabeceraComponent,
        SidebarComponent,
        FooterComponent
    ]
})
export class LayoutModule { }
