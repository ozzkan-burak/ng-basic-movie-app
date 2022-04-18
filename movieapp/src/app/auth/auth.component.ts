import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { IAuthResponse } from '../models/AuthInterface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onToggleMode() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    const email = form.value.email;
    const password = form.value.password;

    let authResponse: Observable<IAuthResponse>;

    if (this.isLoggedIn) {
      authResponse = this.authService.login(email, password);
    } else {
      authResponse = this.authService.signUp(email, password);
    }

    authResponse.subscribe(
      (resData) => {
        console.log(resData);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
