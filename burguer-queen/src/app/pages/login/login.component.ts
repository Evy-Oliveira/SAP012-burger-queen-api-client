import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginError!: string;

  constructor(
    private readonly auth: AuthService, private router: Router
  ){}

  clickLogin(formData: UserLogin){
    console.log(formData);
    this.auth.getLogin(formData).subscribe({
      next:
        (resp) =>{
          console.log(resp);
          localStorage.setItem('access_token', resp.accessToken);
          localStorage.setItem('user_role', resp.user.role);
          this.router.navigate(['/opcoes']);
        },
      error: (error) =>{
        console.log(error);
        this.loginError = 'Email ou senha não cadastrados';
      }
    });
  }
  }

