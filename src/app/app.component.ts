import { Component, ContentChild } from '@angular/core';

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

}
