import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser = {'username':'', 'emailid':'','password':'',}

  constructor(private data:DataService) { }

  ngOnInit() {
  }

  onsubmit(){
    this.data.register(this.newUser).subscribe(res=>{
      alert("registered")
    })
    }
      
  } 


