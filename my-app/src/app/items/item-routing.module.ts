import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListItemsComponent } from './containers/list-items/list-items.component';


const itemRoutes: Routes = [
  { path: 'list', component: ListItemsComponent }

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
