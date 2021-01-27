import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(userName, password){
    const url= "https://reqres.in/api/login";
    const body = {
      email: userName,
      password: password
    }
    return this.http.post(url,body)

  }
}
