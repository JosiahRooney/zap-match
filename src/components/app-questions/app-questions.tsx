import { Component } from '@stencil/core';
import tsdom from 'tsdom';

@Component({
  tag: 'app-questions',
  styleUrl: 'app-questions.scss'
})
export class AppQuestions {
  questions: Array<HTMLElement> = [];
  answers: Object = {};
  currentQuestion: number = 0;

  constructor() {
    this.nextQuestion = this.nextQuestion.bind(this);
    this.lastQuestion = this.lastQuestion.bind(this);
  }

  componentDidLoad() {
    let questions = tsdom('.question');
    if (questions) {
      questions.each((el) => {
        this.questions.push(el);
      });
    }
    this.bindEvents();
  }

  addAnswer(name, value) {
    
  }

  getQuestions() {
    return [
      {
        name: 'dayTrip',
        friendlyName: 'You are going on a day trip:',
        isMulti: true,
        multi: [
          'A. You plan what to do',
          'B. You get in the car and go!'
        ]
      },
      {
        name: 'outgoing',
        friendlyName: 'Would you rather go out with friends or stay at home?',
        isMulti: true,
        multi: [
          'A. Go out with friends',
          'B. Stay at home'
        ]
      },
      {
        name: 'kitchen',
        friendlyName: 'Do you usually cook at home or go out to dinner?',
        isMulti: true,
        multi: [
          'A. Cook at home',
          'B. Go out to dinner'
        ]
      },
      {
        name: 'school',
        friendlyName: 'Do you want to live near a good school?',
        isMulti: true,
        multi: [
          'A. Yes',
          'B. Not important'
        ]
      }
    ];
  }

  nextQuestion() {
    if (this.currentQuestion === this.questions.length - 1) {
      // End the questionnaire
    } else {
      this.currentQuestion += 1;
      tsdom('.question.active').removeClass('active');
      this.questions[this.currentQuestion].classList.add('active');
    }
  }

  lastQuestion() {
    if (this.currentQuestion === 0) {
      // Do nothing
    } else {
      this.currentQuestion -= 1;
      tsdom('.question.active').removeClass('active');
      this.questions[this.currentQuestion].classList.add('active');
    }
  }

  bindEvents() {
    // let backBtns = tsdom('.btn-back');
    // let nextBtns = tsdom('.btn-next');

    // backBtns.each(btn => {
    //   btn.addEventListener('click', this.lastQuestion);
    // });

    // nextBtns.each(btn => {
    //   btn.addEventListener('click', this.nextQuestion);
    // });
  }

  generateQuestionsHtml() {
    let questions = this.getQuestions();
    let questionsHtml = [];
    questions.forEach((question, index) => {
      let input;
      let className = 'question';
      if (index === 0) {
        className = 'question active';
      }
      if (question.isMulti) {
        let options = [];
        question.multi.forEach((multi) => {
          options.push(
            <button value={multi}>{multi}</button>
          )
        });
        input = (
          <div class="question__input">
            {options}
          </div>
        );
      } else {
        input = (
          <div class="question__input">
            <input type="text" placeholder={question.friendlyName} />
          </div>
        );
      }
      let htmlChunk = (
        <div class={className}>
          <div class="question__name">{question.friendlyName}</div>
          {input}
        </div>
      );
      questionsHtml.push(htmlChunk);
    });
    return questionsHtml;
  }

  render() {
    let questionsHtml = this.generateQuestionsHtml();

    return (
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, id sint beatae sunt totam hic ullam officiis neque eum accusantium. Harum voluptatibus quasi optio debitis, modi temporibus minima iure hic!
        </p>
        <div class="questions__container">
          {questionsHtml}
        </div>
      </div>
    );
  }
}
