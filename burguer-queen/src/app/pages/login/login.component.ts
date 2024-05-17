import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private readonly auth: AuthService
  ){}

  clickLogin(formData: UserLogin){
    console.log(formData);
    this.auth.getLogin(formData).subscribe({
      next:
        (resp) =>{
          console.log(resp);
        },
      error:
      (error) =>{
        console.log(error);
      }
    });
  }

}
