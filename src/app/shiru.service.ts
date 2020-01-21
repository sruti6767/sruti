import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShiruService {
  emails: any;
  pass: any;

  constructor() { }
  pro1(data){
    if(data.emails == "srutimanna99@gmail.com" && data.pass == "loveu3000"){
      console.log("Login Successful");
    }
    else{
      console.log("Invalid Credentials");
    }

  }
}
