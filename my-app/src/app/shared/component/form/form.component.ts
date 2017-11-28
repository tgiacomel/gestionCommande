import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../../../items/interface/item.model';
import { State } from '../../enums/state.enum';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() newCmd: EventEmitter<Item> = new EventEmitter();
  newItem: Item;
  state = State;

  constructor() { }

  ngOnInit() {
    this.clear();
  }

  clear() {
    this.newItem = {
      name: '',
      reference: '',
      state: 0
    };
  }

  process(): void {
    this.newCmd.emit(this.newItem);
  }

}
