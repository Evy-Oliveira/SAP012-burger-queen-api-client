import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule, ReactiveFormsModule, NgIf, ButtonComponent]
})
export class FormLoginComponent {
  @Output() sendForm: EventEmitter<UserLogin> = new EventEmitter<UserLogin>();

  formEmail!: string;
  formPassword!: string;

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  getErrorMessage(){
    if(this.email.hasError('required')){
      return 'Você deve inserir um e-mail válido'
    }
    return this.email.hasError('email') ? 'E-mail inválido' : '';
  }
  getData(): UserLogin{
    const userlogin:UserLogin = {email: this.formEmail, password: this.formPassword};
    console.log(userlogin);
    return userlogin;
  }

  clickLogin(){
    this.sendForm.emit(this.getData());
  }

}
