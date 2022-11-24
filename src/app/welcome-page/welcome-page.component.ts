import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  userInput: string;
  
  constructor() { }

  ngOnInit(): void {
  }
  onGameStart(){
    localStorage.setItem("userName", this.userInput);
  }
}
