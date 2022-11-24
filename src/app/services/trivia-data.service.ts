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
}
