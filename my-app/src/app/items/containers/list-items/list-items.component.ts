import { Component, OnInit, Input } from '@angular/core';

import { COLLECTION } from '../../collection';
import { Item } from '../../interface/item.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  collection:  Item[] = COLLECTION;
  constructor() { }

  ngOnInit() {
  }

}
