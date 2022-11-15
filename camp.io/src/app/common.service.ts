import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';



@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: Http) { }
//https://medium.com/@BaaniLeen/connecting-angular-5-app-to-mongodb-database-mean-stack-9b4b4232e219
  // saveUser(user){
  //   return this.http.post('http://localhost:')
  // }
}
