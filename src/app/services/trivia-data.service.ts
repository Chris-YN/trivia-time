import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TriviaDataService {

  constructor(private http: HttpClient) { }

  getTriviaDataJson(){
    return this.http.get<any>("assets/triviaData.json");
  }

  getData(){
    let url ="https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple";
    return this.http.get(url);
  }
}
