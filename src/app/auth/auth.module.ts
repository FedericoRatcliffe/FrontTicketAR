import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialNGModule } from '../material/material-ng.module';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MaterialNGModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    RegisterComponent,
    LoginComponent,
  ]
})
export class AuthModule { }
