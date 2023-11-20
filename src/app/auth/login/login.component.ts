import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    loginForm : FormGroup
    errorMessage : string |null = null 
    constructor(private formbuilder : FormBuilder , private authService :AuthService , private router :Router){

      this.loginForm = this.formbuilder.group({
        username : ["",Validators.required],
        password : ["",Validators.required]
      })


    }

    onSubmit(){
      if(this.loginForm.invalid){
        return;
      }
        const {username , password}  = this.loginForm.value
        this.authService.login(username,password).subscribe(data =>{
          console.log("Data received" + data)
          
        })

    }


}
