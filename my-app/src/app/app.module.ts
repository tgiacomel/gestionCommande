import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { ItemsModule } from './items/items.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    ItemsModule,
    CoreModule
  ],
  declarations: [
    AppComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
