import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
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
  form: FormGroup;

  hide = true;

  constructor(){
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('')
    });
  }

  getErrorMessage(){
    const verificaEmail: any = this.form.get('email');
    if(verificaEmail || verificaEmail === null) return '';
    if(verificaEmail.hasError('required')){
      return 'Você deve inserir um e-mail válido'
    }
    return verificaEmail.hasError('email') ? 'E-mail inválido' : '';
  }

  clickLogin(){
    this.sendForm.emit(this.form.value);
  }

}
