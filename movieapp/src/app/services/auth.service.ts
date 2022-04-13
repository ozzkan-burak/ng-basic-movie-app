import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// interface
import { IAuthResponse } from '../auth/AuthInterface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    return this.http.post<IAuthResponse>(this.url,{
      email,
      password,
      returnSecureToken: true
    })
  }

  login(email:string, password:string) {
    return this.http.post<IAuthResponse>(this.url,{
      email,
      password,
      returnSecureToken: true
    })
  }
}
