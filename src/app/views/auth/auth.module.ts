import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
    declarations: [ AuthComponent, LoginComponent, RegistroComponent, ForgotPasswordComponent ],
    imports: [
        CommonModule,
        FormsModule,
        AuthRoutingModule,
        AccordionModule
    ]
})
export class AuthModule { }
  