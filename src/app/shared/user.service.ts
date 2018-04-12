import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { User } from './user.model';
import { Token, TokenType } from '@angular/compiler';

@Injectable()
export class UserService {
  readonly rootUrl = "https://jwt-demo.openshift.techgap.it";
  public token: string;

    constructor(private http: HttpClient) {}
   
    userAuthentication(userName,password){

        return this.http.post("https://jwt-demo.openshift.techgap.it/login", {
            'username': userName,
            'password': password
        }, {
            headers: new HttpHeaders().set('Content-Type', 'application/json'), observe: 'response'
        })
        .map(res => {  // Pull JSON Web Token from headers
            let token = res.headers.get('authorization').split(" ");
            return token;
        });

    }

    getUser(){
        return this.http.get(this.rootUrl+'/profile', {  // Get user profile using a Bearer schema with JSON Web Kit token
            headers : new HttpHeaders({'Authorization':'Bearer'+localStorage.getItem('userToken')
        })});
    }
    
}