import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  UserRegistrationForm : FormGroup;
  constructor() { 
    this.UserRegistrationForm = new FormGroup({
      username : new FormControl('', [Validators.required]), 
      email : new FormControl('', [Validators.email, Validators.required]), 
      password : new FormControl('', [Validators.required]), 
    });
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.UserRegistrationForm.value);
  }

}
