import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TriviaDataService } from '../services/trivia-data.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class GamePageComponent implements OnInit {
  triviaDataArrLong: any;
  triviaDataArr: any;
  questionsArr: String[] = [];
  incorrectOptionsArr: string[] = [];
  currentQuestionIndex = 0;
  currentScore: any = 0;
  OptionsArr: any = [];
  optionValue: string = ""
  triviaEndMet: Boolean = false;
  wasCorrectCheck: number = 0;

  constructor(private triviaDataService: TriviaDataService) { }


  ngOnInit(): void {
    this.getQuestions()
  }

  getQuestions() {
    this.triviaDataService.getData().subscribe((response) => {
      this.triviaDataArrLong = response;

      //assigning only the needed part of the response to triviaDataArrarray
      this.triviaDataArr = this.triviaDataArrLong.results

      //replace special characters with its equivalent
      // needs cleanup!
      for (let i = 0; i < this.triviaDataArr.length; i++) {
        this.questionsArr.push(this.triviaDataArr[i].question.replace(/&quot;/g, '"').replace(/&rsquo;/g, "'").replace(/&Eacute;/g, "é").replace(/&#039;/g, "'").replace(/&shy;/g, "").replace(/&amp;/g, "&"))
      }

      //json has two different key value pairs for incorrect options and correct option. combining the options into a spperate array and shuffling order
      for (let i = 0; i < this.triviaDataArr.length; i++) {
        this.incorrectOptionsArr.push(this.triviaDataArr[i].incorrect_answers);
      }

      for (let i = 0; i < this.incorrectOptionsArr.length; i++) {
        this.OptionsArr[i] = [...this.incorrectOptionsArr[i], this.triviaDataArr[i].correct_answer]

        this.OptionsArr[i].sort(() => {
          return Math.random() - 0.5;
        })
      }
    })
  }

  OnOptionClick(event: any) {
    //answer check
    if (event.target.innerText === this.triviaDataArr[this.currentQuestionIndex].correct_answer) {
      //if correctly answered
      console.log("correct");
      this.wasCorrectCheck = 1;
      this.currentScore += 100;
      console.log("wasCorrectCheck " + this.wasCorrectCheck)
      console.log("Correct! current score: " + this.currentScore);
      // if check to ensure currentQuestionIndex does not go over the las index of triviaDaraArr
      if (this.currentQuestionIndex === this.triviaDataArr.length - 1) {
        this.triviaEndMet = true;
      } else {
        setTimeout(() => {
          this.currentQuestionIndex++;
        }, 0)
      }
    } else {
      //if incorrectly answered
      this.wasCorrectCheck = -1;
      this.currentScore -= 20;
      console.log("right answer was " + this.triviaDataArr[this.currentQuestionIndex].correct_answer)
      // if check to ensure currentQuestionIndex does not go over the las index of triviaDaraArr
      if (this.currentQuestionIndex === this.triviaDataArr.length - 1) {
        this.triviaEndMet = true;
      } else {
        setTimeout(() => {
          this.currentQuestionIndex++;
        }, 0)
      }
    }
  }
  onSkipClick() {
      this.currentQuestionIndex++
  }

  onScoreButtonClick() {
    localStorage.setItem("userScore", this.currentScore);
  }

}
