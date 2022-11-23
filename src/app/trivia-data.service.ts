import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TriviaDataService {
  testTriviaDataArr:{}[]=[
    {
      question:'Question: Which of the following is not the name of a "Bond Girl"?',
      optionA:'Pam Bouvier',
      optionB:'Wai Lin',
      optionC:'Vanessa Kensington',
      optionD:'Mary Goodnight',
      correctAnswer:'Vanessa Kensington'
    },
    {
      question: 'Question: What name did Tom Hanks give to his volleyball companion in the film `Cast Away`?',
      optionA: 'Jones',
      optionB: 'Wilson',
      optionC: 'Friday',
      optionD: 'Billy',
      correctAnswer: 'Wilson'
    },
    {
      question: 'Question: Who played the female lead in the 1933 film "King Kong"?',
      optionA: 'Jean Harlow',
      optionB: 'Mae West',
      optionC: 'Vivien Leigh',
      optionD: 'Fay Wray',
      correctAnswer: 'Fay Wray'
    },
    {
      question: 'Question: Who starred in the film 1973 movie "Enter The Dragon"?',
      optionA: 'Jackie Chan',
      optionB: 'Jet Li',
      optionC: 'Yun-Fat Chow',
      optionD: 'Bruce Lee',
      correctAnswer: 'Bruce Lee'
    },
  ]
  constructor() { }
}
