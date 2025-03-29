import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule], 
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  myForm:FormGroup;
  constructor(private form:FormBuilder){
    this.myForm = this.form.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')]],
      password: ['',[Validators.required,Validators.minLength(8)]],
    }
    )}
    get email(){
      return this.myForm.get('email')
    }
  
    get password(){
      return this.myForm.get('password')
    }
    
    signup() {
      console.log(this.myForm.value);



}
}
