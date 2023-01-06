import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  selectedAnswer = "";
  quizModule = "";
  quizState = 0;
  quizIndex = 0;
  quizData = [
    {q:'Ce este un algoritm?', a:["O problema de rezolvat cu ajutorul calculatorului","Un set de pasi, repetati pentru a gasi rezultatul","O materie de liceu","N-am auzit niciodata de acest cuvant"], s:"Un set de pasi, repetati pentru a gasi rezultatul"},
    {q:'Ce putem afirma atunci cand clasa B mosteneste clasa A?', a:["Clasa A ia toate campurile si metodele clasei B","Clasa B ia toate metodele si campurile clasei A","Clasa B devine o copie a clasei A","N-am auzit niciodata de clase"], s:"Clasa B ia toate metodele si campurile clasei A"},
    {q:'Care sunt functiile principale ale unui server?', a:["Gestioneaza request-urile si serveste resursele statice","Ne ajuta sa ne jucam pe Internet","Este un computer care ruleaza 24/7","N-am auzit niciodata de server"], s:"Gestioneaza request-urile si serveste resursele statice"},
    {q:'Ce serviciu este potrivit pentru a gestiona cod intr-o echipa?', a:["Maven","Cucumber","GitHub","Foaia de hartie si pixul"], s:"GitHub"},
    {q:'Care este Package Manager-ul limbajului Python?', a:["pip","py","apt","dhl"], s:"pip"},
  ];
  quizScore = 0;
  quizTimer = 0;
  quizTimerObj:null|ReturnType<typeof setInterval> = null;
  startQuiz() {
    this.quizState = 1;
    this.quizScore = 0;
    this.quizTimer = 120;
    this.quizIndex = 0;

    this.quizTimerObj = setInterval(()=>{
      this.quizTimer-=1;
      if (this.quizTimer<=0){
        this.stopQuiz();
      }
    }, 1000)
  }
  stopQuiz(){
    this.quizState = 2;
    if (this.quizTimerObj){
      clearInterval(this.quizTimerObj);
    }
    if (this.quizScore == 0 || this.quizScore == 1){
      this.quizModule = "Module 1";
    }else if (this.quizScore == 2){
      this.quizModule = "Module 2";
    }else if (this.quizScore == 3){
      this.quizModule = "Module 3";
    }else if (this.quizScore == 4){
      this.quizModule = "Module 4";
    }else if (this.quizScore == 5){
    this.quizModule = "Module Extra";
    }
  }
  nextQuestion(){

    if(this.selectedAnswer == this.quizData[this.quizIndex].s){
      this.quizScore +=1;
    }
    this.quizIndex +=1;
    if(this.quizIndex >= this.quizData.length){
      this.stopQuiz();
    }
  }
  resetQuiz(){
    this.quizState = 0;
  }
}
