import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.css']
})
export class ScorePageComponent implements OnInit {

  storedUserName:string;
  storedUserScore:any;


  constructor() { }

  ngOnInit(): void {
    this.storedUserName=localStorage.getItem("userName")!;
    this.storedUserScore = localStorage.getItem("userScore")!;
  }
  

}
