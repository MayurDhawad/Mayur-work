import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:4100/api/register"
  private _loginUrl = "http://localhost:4100/api/login"
  private _forgotUrl = "http://localhost:4100/api/forgot"

  constructor( private http : HttpClient, private _router : Router) { }

  registerUser(user){
      return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }

  forgotUser(user){
     return this.http.post<any>(this._forgotUrl, user)
  }

  loggedIn(){
     return !!localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/'])
  }
}
