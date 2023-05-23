import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.scss']
})
export class RegisteruserComponent implements OnInit {

  firstname: string ="";
  lastname: string ="";
  email: string ="";
  password: string ="";

  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit(): void
  {
  }
 
  register()
  {
    let bodyData =
    {
      "firstname" : this.firstname,
      "lastname" : this.lastname,
      "email" : this.email,
      "password" : this.password,
    };
    this.http.post("http://localhost:4800/user/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Registered Successfully")

        if (resultData.status)
        {
           this.router.navigateByUrl('/login');
        }
        else
         {
          alert("Incorrect Email or Password");
          console.log("Error logging");
        }
    });
  }
 
  save()
  {
    this.register();
  }
 
}