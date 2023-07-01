import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:any;
  password:any;
  user:any;

  constructor(private route:Router){}
    login(){
      if(this.password=="@12@12@")
      {
        this.user={
          "username":this.username,
          "password":this.password
        }
        localStorage.setItem('cred',JSON.stringify(this.user));
        this.route.navigateByUrl('/user/products')

      }
    }
  }

