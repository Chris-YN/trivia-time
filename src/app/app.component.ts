import { Component, ContentChild } from '@angular/core';
import { TriviaDataService } from './services/trivia-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'triviaTime';

  dtw(name:string){
    console.log(name)
  }

  constructor(private trivia:TriviaDataService){
    this.trivia.getData().subscribe((data)=>{
    })
  }
}
