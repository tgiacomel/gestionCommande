import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemComponent } from './components/item/item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ItemComponent],
  exports: [ ItemComponent]
})
export class ItemsModule { }
