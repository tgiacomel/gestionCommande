import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


import { SharedModule } from './shared/shared.module';
import { ItemsModule } from './items/items.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { CollectionService } from './core/service/collection/collection.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ItemsModule,
    CoreModule,
    RouterModule
  ],
  declarations: [
    AppComponent
  ],

  providers: [CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    if (!environment.production) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
  }
}
