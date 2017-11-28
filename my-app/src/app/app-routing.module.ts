import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListItemsComponent } from './items/containers/list-items/list-items.component';



const appRoutes: Routes = [
  { path: '',
    redirectTo : '/home',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  declarations: []
})
export class AppRoutingModule { }
