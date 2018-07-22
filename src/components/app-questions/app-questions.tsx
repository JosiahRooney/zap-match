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
  
  questions: Array<HTMLElement> = [];
  answers: Array<Object> = [];
  currentQuestion: number = 0;

  constructor() {
    this.nextQuestion = this.nextQuestion.bind(this);
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
    this.answers.push({name, value: parseInt(value)});
  }

  getQuestions() {
    return [
      {
        name: 'dayTrip',
        friendlyName: 'You are going on a day trip. You:',
        isMulti: true,
        multi: [
          'Plan the day from start to end.',
          'Decide to what to do as the day goes on.'
        ]
      },
      {
        name: 'outgoing',
        friendlyName: 'Would you rather:',
        isMulti: true,
        multi: [
          'Host a party',
          'Be a guest',
          'Stay at home'
        ]
      },
      {
        name: 'kitchen',
        friendlyName: 'Do you usually:',
        isMulti: true,
        multi: [
          'Cook at home',
          'Go out to dinner'
        ]
      }
    ];
  }

  nextQuestion(evt) {
    let questionName = evt.target.dataset.name;
    let questionValue = evt.target.dataset.value;

    if (this.currentQuestion === this.questions.length - 1) {
      // End the questionnaire
      this.addAnswer(questionName, questionValue);
      let coords = this.match.params.coords;
      this.history.push({
        pathname: `/results`, 
        state: {
          answers: this.answers,
          coords
        }
      });
    } else {
      this.addAnswer(questionName, questionValue);
      this.currentQuestion += 1;
      tsdom('.question.active').removeClass('active');
      this.questions[this.currentQuestion].classList.add('active');
    }
  }

  bindEvents() {
    let nextBtns = tsdom('.btn-next');

    nextBtns.each(btn => {
      btn.addEventListener('click', this.nextQuestion);
    });
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
          <button class="btn-next" data-name={question.name} data-value={index}>{multi}</button>
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
