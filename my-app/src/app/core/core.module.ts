import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [
    HomeComponent,
    PageNotFoundComponent],
  exports : [
    HomeComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
