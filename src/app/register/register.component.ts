import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  username: string = "";
  password: string = "";

  constructor(private http:HttpClient){

  }


  
  save(){
    if (!this.username || !this.password) {
      alert("Please enter both a username and a password.");
      return; // Exit the function if username or password is empty
    }else{
      let bodyData = {
        "username": this.username,
        "password": this.password
      };
    
      this.http.post("http://localhost:8080/api/v1/user/save", bodyData, { responseType: 'text' }).subscribe((resultData: any) => {
        console.log(resultData);
        alert("Account Successfully Registered!");
      });
    }
  
    
  }
}
