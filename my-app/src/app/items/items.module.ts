import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ItemComponent } from './components/item/item.component';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { SharedModule } from '../shared/shared.module';
import { ItemRoutingModule } from './item-routing.module';
import { AddItemComponent } from './components/add-item/add-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemRoutingModule,
    FormsModule
  ],
  declarations: [ ItemComponent, ListItemsComponent, AddItemComponent],
  exports: [ ItemComponent, ListItemsComponent]
})
export class ItemsModule { }
