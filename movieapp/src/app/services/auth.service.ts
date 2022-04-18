import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// interface
import { IAuthResponse } from '../models/AuthInterface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  api_key = 'AIzaSyDHokh6I9jVIIlKK10b1Cqq2jNakz4JLqs'
  url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.api_key}`

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
