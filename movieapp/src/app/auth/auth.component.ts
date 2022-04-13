import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoggedIn: boolean = false; 

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onToggleMode() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  onSubmit(form:NgForm) {
    if(form.invalid) return;
    
    const email = form.value.email;
    const password = form.value.password;

    if(this.isLoggedIn){
      this.authService.login(email, password).subscribe(response => {
        console.log(response);
      }, err => {
        console.log(err);
      })
    } else {
      this.authService.signUp(email, password).subscribe(response => {
        console.log(response)
      }, err => {
        console.log(err)
      })
    }
  }
}
