import { Component } from '@angular/core';
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

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    console.log(this.email);
    console.log(this.password);

    const bodyData = {
      email: this.email,
      password: this.password,
    };

    this.http.post("http://localhost:4800/user/login", bodyData).subscribe((resultData: any) => {
      console.log(resultData);

      if (resultData.status) {
        if (resultData.isAdmin) {
          this.router.navigateByUrl('/admin');
        } else {
          this.router.navigateByUrl('/main');
        }
      } else {
        alert("Incorrect Email or Password");
        console.log("Error logging");
      }
    });
  }
}

