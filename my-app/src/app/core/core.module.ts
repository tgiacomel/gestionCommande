import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './component/login/login.component';




@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent],
  exports : [
    HomeComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
