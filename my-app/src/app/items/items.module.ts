import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemComponent } from './components/item/item.component';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { SharedModule } from '../shared/shared.module';
import { ItemRoutingModule } from './item-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemRoutingModule
  ],
  declarations: [ ItemComponent, ListItemsComponent],
  exports: [ ItemComponent, ListItemsComponent]
})
export class ItemsModule { }
