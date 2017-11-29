import { Injectable } from '@angular/core';

import { COLLECTION } from '../../../items/collection';
import { Item } from '../../../items/interface/item.model';
import { State } from '../../../shared/enums/state.enum';

@Injectable()
export class CollectionService {

  collection: Item[] = COLLECTION;
  constructor() { }

  addItem(item: Item): void {
    this.collection.push(item);
  }

  update(item: Item, state: State): void {
      item.state = state;
  }

}
