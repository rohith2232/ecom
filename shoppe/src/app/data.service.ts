import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
register(usr) {

  return this.http.post('http://localhost:3000/register', usr);

}
login(usr) {

  return this.http.post('http://localhost:3000/login', usr);

}
feedback(usr) {

  return this.http.post('http://localhost:3000/feedback', usr);

}

}
