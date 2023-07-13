import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { MaterialNGModule } from '../material/material-ng.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterBarComponent
  ],
  imports: [
    CommonModule,
    MaterialNGModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    FooterBarComponent,
  ]
})
export class NavModule { }
