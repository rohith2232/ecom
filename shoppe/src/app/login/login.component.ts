import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = { user: '', 'email': '', 'password': '' };
  response;



  constructor(private data:DataService) { }

  ngOnInit() {}
    onsubmit(){
    this.data.login(this.user).subscribe(res=>{
      alert(JSON.stringify(res));
    });
    
    }
  }


