import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loginCtrl: FormControl;
  pwdCtrl: FormControl;
  constructor(private fb: FormBuilder, private _Router: Router) {
    this.loginCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(5)

    ]);

    this.pwdCtrl = fb.control('', [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)
    ]);

    this.form = fb.group({
        login : this.loginCtrl,
        pwd : this.pwdCtrl
    });
  }

  ngOnInit() {
  }

  login(): void {
    if (this.loginCtrl.value === 'thibaut' && this.pwdCtrl.value === 'Toulouse31') {
      this._Router.navigate(['/home']);
    }else {
      this.form.setErrors({authenticationError : 'Login ou pwd invalide'});
    }
  }

  isError(champs: string, error: string) {
    return this.form.get(champs).dirty && this.form.get(champs).hasError(error);
  }


}
