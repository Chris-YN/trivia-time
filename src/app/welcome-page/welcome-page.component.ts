import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  @ViewChild('userNameInput', {static:true}) userName:ElementRef;
  constructor() { }
  @Output() playerName = new EventEmitter<string>;

  ngOnInit(): void {
  }
  onGameStart(){
    this.playerName.emit(this.userName.nativeElement.value)
  }
}
