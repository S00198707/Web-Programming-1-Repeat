import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.scss']
})
export class LoginuserComponent {

  email: string = '';
  password: string = '';
 
  isLogin: boolean = true;
  errorMessage: string = "";
 
  constructor(private router: Router,private http: HttpClient) {}
 
  login() {
    console.log(this.email);
    console.log(this.password);
 
    let bodyData = {
      email: this.email,
      password: this.password,
    };
 
        this.http.post("http://localhost:4800/user/login", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
 
        if (resultData.status)
        {
           this.router.navigateByUrl('/main');
        }
        else
         {
          alert("Incorrect Email or Password");
          console.log("Error logging");
        }
      });
    }
 
}
