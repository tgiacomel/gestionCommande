import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../interface/item.model';
import { State } from '../../../shared/enums/state.enum';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  state = State;

  @Input('item')
  item: Item;

  constructor() { }

  ngOnInit() {
  }

  changeState (item: Item, state: State) {
    item.state = state;
  }

}
