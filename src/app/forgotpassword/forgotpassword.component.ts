import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  
  ForgotPasswordForm : FormGroup;
  
  constructor() { 
    this.ForgotPasswordForm = new FormGroup({
      email : new FormControl('',[ Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.ForgotPasswordForm.value.email)
    if(this.ForgotPasswordForm.valid){
      this.ForgotPasswordForm.reset();
    }
  }

}
