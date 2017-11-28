import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './component/menu/menu.component';
import { StateDirective } from './directive/state/state.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MenuComponent,
    StateDirective
  ],
  exports : [
    MenuComponent,
    StateDirective
  ]
})
export class SharedModule { }
