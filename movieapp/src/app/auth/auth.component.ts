import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoggedIn: boolean = false; 

  constructor() { }

  ngOnInit(): void {
  }

  onToggleMode() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  onSubmit(form:NgForm) {
    if(form.invalid) return;
    console.log(form.value);
  }

}
