import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule, ReactiveFormsModule, NgIf]
})
export class FormLoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
hide = true;

  getErrorMessage(){
    if(this.email.hasError('required')){
      return 'Você deve inserir um e-mail válido'
    }
    return this.email.hasError('email') ? 'E-mail inválido' : '';
  }

}
