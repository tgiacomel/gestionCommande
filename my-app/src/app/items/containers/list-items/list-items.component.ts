import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../interface/item.model';
import { CollectionService } from '../../../core/service/collection/collection.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  collection: Item[];
  constructor(private collectionService: CollectionService) { }
  filter: String = '';

  ngOnInit() {
    this.collection =  this.collectionService.collection;
  }

  addSearch(search: String) {
      this.filter = search;
  }

}
