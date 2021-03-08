import { Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Forgot } from '../forgot'

@Component({
  selector: 'app-forgot-page',
  templateUrl: './forgot-page.component.html',
  styleUrls: ['./forgot-page.component.css']
})


export class ForgotPageComponent implements OnInit {

    forgotUserData = new Forgot ("")
    constructor(private _auth : AuthService, private _router : Router){}

    ngOnInit(){

    }

    forgotUser(){
       this._auth.forgotUser(this.forgotUserData)
          .subscribe(
              res =>  {
                        console.log(res),
                        localStorage.setItem('token', res.token)
                        this._router.navigate(['/exchange'])
                      },
              err =>console.log(err)
          )
    }
  
}
