import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  newUser = {'username':'', 'comments':'',}

  constructor(private data:DataService) { }

  ngOnInit() {
  }
 
  onsubmit(){
    this.data.feedback(this.newUser).subscribe(res=>{
      alert("registered")
    })
    }
      
  } 