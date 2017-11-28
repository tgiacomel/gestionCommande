import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../../interface/item.model';
import { COLLECTION } from '../../collection';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {


  collection: Item[] = COLLECTION;
  constructor(private _Router: Router) { }

  ngOnInit() {

  }

  addItem(item: Item): void {
    this.collection.push(item);
    //this._Router.navigate(['/list']);
  }
}
