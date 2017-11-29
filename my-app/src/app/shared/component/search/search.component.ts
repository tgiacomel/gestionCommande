import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchTerm: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  searchCtrl: FormControl;

  constructor(private fb: FormBuilder) {
    this.searchCtrl = fb.control('');

    this.form = fb.group({
        search : this.searchCtrl
    });
  }

  ngOnInit() {

  }

  keyup(search: String): void {
    this.searchTerm.emit(search);
  }

}
