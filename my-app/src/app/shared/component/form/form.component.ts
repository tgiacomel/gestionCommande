import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../../../items/interface/item.model';
import { State } from '../../enums/state.enum';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() newCmd: EventEmitter<Item> = new EventEmitter();
  state = State;

  form: FormGroup;
  nameCtrl: FormControl;
  refCtrl: FormControl;
  stateCtrl: FormControl;

  constructor(private fb: FormBuilder) {
    this.nameCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(5)
    ]);

    this.refCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(4)
    ]);
    this.stateCtrl = fb.control(this.state.ALIVRER);

    this.form = fb.group({
        name : this.nameCtrl,
        ref : this.refCtrl,
        state : this.stateCtrl
    });
  }

  ngOnInit() {
  }

  isError(champs: string) {
    return this.form.get(champs).dirty && this.form.get(champs).hasError('minlength');
  }

  process(): void {
    this.newCmd.emit({
      name : this.nameCtrl.value,
      reference: this.refCtrl.value,
      state: this.stateCtrl.value
    });
    this.form.reset();
    this.stateCtrl.setValue(this.state.ALIVRER);
  }

}
