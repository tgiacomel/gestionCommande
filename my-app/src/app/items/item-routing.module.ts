import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddItemComponent } from './components/add-item/add-item.component';


const itemRoutes: Routes = [
  { path: 'list', component: ListItemsComponent },
  { path: 'addItem', component: AddItemComponent }

];

@NgModule({
  imports: [
    RouterModule.forChild(
      itemRoutes
    )
    // other imports here
  ],
  declarations: []
})
export class ItemRoutingModule { }
