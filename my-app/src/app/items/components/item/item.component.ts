import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../interface/item.model';
import { State } from '../../../shared/enums/state.enum';
import { CollectionService } from '../../../core/service/collection/collection.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  state = State;

  @Input('item')
  item: Item;

  constructor(private collectionService: CollectionService) { }

  ngOnInit() {

  }

  changeState (item: Item, state: State) {
    this.collectionService.update(item, state);
    item.state = state;

  }

}
