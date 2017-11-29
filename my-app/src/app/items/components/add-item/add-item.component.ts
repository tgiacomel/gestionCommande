import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../../interface/item.model';
import { COLLECTION } from '../../collection';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { ModalComponent } from '../../../shared/component/modal/modal.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {


  collection: Item[] = COLLECTION;
  constructor(private _Router: Router, private modalService: NgbModal ) { }

  ngOnInit() {

  }

  addItem(item: Item): void {
    this.collection.push(item);
    // this._Router.navigate(['/list']);
    this.open('Cmd correctement ajouté', '/list');
  }

  open(msg: String, route: String) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.msg = msg;
    modalRef.componentInstance.route = route;
  }
}
