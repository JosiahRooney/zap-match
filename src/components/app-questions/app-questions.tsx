import { Component, Prop } from '@stencil/core';
import { RouterHistory, MatchResults } from '@stencil/router';
import tsdom from 'tsdom';

@Component({
  tag: 'app-questions',
  styleUrl: 'app-questions.scss'
})
export class AppQuestions {
  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;
  state: any = {};
  locationInfo: any;
  questions: Array<HTMLElement> = [];
  answers: Array<Object> = [];
  currentQuestion: number = 0;
  backBtn: HTMLDivElement;

  constructor() {
    this.nextQuestion = this.nextQuestion.bind(this);
    this.lastQuestion = this.lastQuestion.bind(this);
    this.submitQuestionnaire = this.submitQuestionnaire.bind(this);
    this.handleBackBtnClick = this.handleBackBtnClick.bind(this);
  }

  componentDidLoad() {
    let questions = tsdom('.question');
    if (questions) {
      questions.each((el) => {
        this.questions.push(el);
      });
    }
    this.locationInfo = this.history.location.state.locationInfo;
    this.backBtn = document.querySelector('.back');
    this.bindEvents();
  }

  addAnswer(name, value) {
    this.answers.push({name, value: parseInt(value)});
  }

  getQuestions() {
    return [
      {
        name: 'learning',
        friendlyName: 'Pick One:',
        isMulti: true,
        multi: [
          {
            choice: 'Learning things on my own',
            image: 'assets/images/learning2.png'
          },
          {
            choice: 'Having someone teach me',
            image: 'assets/images/learning.png'
          }
        ]
      },
      {
        name: 'eating',
        friendlyName: 'Pick One:',
        isMulti: true,
        multi: [
          {
            choice:'Eating a home-cooked meal',
            image: 'assets/images/eating.png'
          },
          {
            choice:'Dining out at a restaurant',
            image: 'assets/images/eating2.png'
          }
        ]
      },
      {
        name: 'fun',
        friendlyName: 'Pick One:',
        isMulti: true,
        multi: [
          {
            choice: 'Having fun with a close friend',
            image: 'assets/images/fun.png'
          },
          {
            choice: 'Attending large group activities',
            image: 'assets/images/fun2.png'
          }
        ]
      }
    ];
  }

  submitQuestionnaire() {
    this.history.push({
      pathname: `/results`,
      state: {
        answers: this.answers,
        coords: this.locationInfo.coords,
        city: this.locationInfo.city
      }
    });
  }

  nextQuestion(evt) {
    let questionName = evt.target.dataset.name;
    let questionValue = evt.target.dataset.value;

    this.questions[this.currentQuestion].classList.add('done');

    if (this.currentQuestion === this.questions.length - 1) {
      // End the questionnaire
      this.addAnswer(questionName, questionValue);
      this.submitQuestionnaire();
    } else {
      this.addAnswer(questionName, questionValue);
      this.currentQuestion += 1;
      tsdom('.question.active').removeClass('active');
      this.questions[this.currentQuestion].classList.add('active');
    }
  }

  lastQuestion() {
    this.questions[this.currentQuestion].classList.remove('done');
    if (this.currentQuestion === 0) {
      document.querySelector('.banner h1').classList.add('hide');
      this.history.go(-1);
    } else {
      this.currentQuestion -= 1;
      tsdom('.question.active').removeClass('active');
      this.questions[this.currentQuestion].classList.add('active');
    }
  }

  handleBackBtnClick() {
    this.lastQuestion();
  }

  bindEvents() {
    let nextBtns = tsdom('.btn-next');

    nextBtns.each(btn => {
      btn.addEventListener('click', this.nextQuestion);
    });

    this.backBtn.addEventListener('click', this.handleBackBtnClick);
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

      let options = [];
      question.multi.forEach((multi, index) => {
        options.push(
          <button class="btn-next" data-name={question.name} data-value={index}>
            <img src={multi.image} alt=""/>
            <p>{multi.choice}</p>
          </button>
        )
      });

      input = (
        <div class="question__input">
          {options}
        </div>
      );

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
        <div class="back">
          <span></span>
        </div>
        <div class="questions__container">
          {questionsHtml}
        </div>
      </div>
    );
  }
}
