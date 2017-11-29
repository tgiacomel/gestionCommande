import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { MenuComponent } from './component/menu/menu.component';
import { StateDirective } from './directive/state/state.directive';
import { FormComponent } from './component/form/form.component';
import { ModalComponent } from './component/modal/modal.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { SearchComponent } from './component/search/search.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    MenuComponent,
    StateDirective,
    FormComponent,
    ModalComponent,
    FilterPipe,
    SearchComponent
  ],
  exports : [
    MenuComponent,
    StateDirective,
    FormComponent,
    ModalComponent,
    SearchComponent,
    FilterPipe
  ],
  entryComponents : [
    ModalComponent
  ]
})
export class SharedModule { }
