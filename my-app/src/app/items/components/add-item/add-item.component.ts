import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../../interface/item.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { ModalComponent } from '../../../shared/component/modal/modal.component';
import { CollectionService } from '../../../core/service/collection/collection.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {


  collection: Item[];
  constructor(private _Router: Router, private modalService: NgbModal, private collectionService: CollectionService ) { }

  ngOnInit() {
      this.collection = this.collectionService.collection;
  }

  addItem(item: Item): void {
    this.collectionService.addItem(item);
    // this._Router.navigate(['/list']);
    this.open('Cmd correctement ajouté', '/list');
  }

  open(msg: String, route: String) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.msg = msg;
    modalRef.componentInstance.route = route;
  }
}
