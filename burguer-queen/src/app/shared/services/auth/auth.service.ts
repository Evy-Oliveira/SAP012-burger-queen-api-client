import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatLogin } from 'src/utils/transformers';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'      
    })
  };

  constructor(
    private readonly http: HttpClient
  ) { }
  getLogin(login: UserLogin): Observable<Login>{
    return this.http.post<Login>(`${environment.ENDERECO_API}login`,login, this.HTTP_OPTIONS).pipe( 
      tap(resp => {
        console.log(resp);
        return formatLogin(resp)
      })
    )
  }
}
