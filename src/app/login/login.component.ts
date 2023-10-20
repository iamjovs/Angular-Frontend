import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = "";
  password: string = "";

  constructor(private router: Router,private http: HttpClient){

  }

  userlogin(){

    if (!this.username || !this.password) {
      alert("Please enter both a username and a password.");
      return; // Exit the function if username or password is empty
    }else{
      console.log(this.username);
      console.log(this.password);

      let bodyData = {
        username: this.username,
        password: this.password,
      };

      this.http.post("http://localhost:8080/api/v1/user/login",bodyData).subscribe((resultData: any) => {
        console.log(resultData);

        if(resultData.message == "Email does not exist"){
          alert("Email does not exist");
        }else if(resultData.message == "Login Success"){
          this.router.navigateByUrl('/home');
        }else{
          alert("Incorect Email or Password does not match");
        }
      })
    }

    
  }

}
