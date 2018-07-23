import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-agent',
  styleUrl: 'app-agent.scss'
})
export class AppAgent {
  @Prop() history: RouterHistory;
  agent: any;
  message: String;
  textarea: HTMLTextAreaElement;
  submitButton: HTMLButtonElement;
  backBtn: HTMLDivElement;

  constructor() {
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleBackBtnClick = this.handleBackBtnClick.bind(this);
  }

  componentDidLoad() {
    this.textarea = document.querySelector('#agent-form-textarea');
    this.submitButton = document.querySelector('#agent-form-submit');
    this.backBtn = document.querySelector('.back');
    this.bindEvents();
  }

  handleSubmitForm() {
    if (this.textarea.value) {
      this.message = this.textarea.value;
      this.history.push(`/conversation`, {
        message: this.message,
        agent: this.agent
      });
    }
  }

  handleBackBtnClick() {
    this.history.go(-1);
  }

  bindEvents() {
    this.submitButton.addEventListener('click', this.handleSubmitForm);
    this.backBtn.addEventListener('click', this.handleBackBtnClick);
  }

  generateAgentHTML() {
    let placeholder = `Hi ${this.agent.name.split(' ')[0]}, I'm looking to buy a home in ${this.agent.city.split(',')[0]} and hoping you can help me with the process.`;
    return (
      <div class="agent">
        <div class="agent__banner">
          <div class="overlay"></div>
          <div class="banner__city">
            {this.agent.city}
          </div>
        </div>
        <div class="agent__photo">
          <img src={this.agent.photoLarge} alt=""/>
        </div>
        <div class="agent__name">
          <p>{this.agent.name}</p>
        </div>
        <div class="agent__reviews">
          ⭐⭐⭐⭐⭐ ({this.agent.reviews} reviews)
        </div>
        <div class="agent__details">
          <p>His favorite restaurant in Oakland: <span>Marzano</span></p>
        </div>
        <div class="agent__match">
          <p>You are a <span>{this.agent.match}%</span> match with {this.agent.name.split(' ')[0]} based on:</p>
          <div class="compatibility-metrics">
            <div class="compatibility-metric">
              <div class="image-container"><img src="assets/images/phone.png" alt=""/></div>
              Communication style
            </div>
            <div class="compatibility-metric">
              <div class="image-container"><img src="assets/images/leaf.png" alt=""/></div>
              Experience with 1st-time buyers
            </div>
            <div class="compatibility-metric">
              <div class="image-container"><img src="assets/images/calendar.png" alt=""/></div>
              Availability schedule
            </div>
          </div>
        </div>
        <div class="agent__form">
          <div class="text-box">
            <textarea name="agent-form-textarea" id="agent-form-textarea" placeholder={placeholder}></textarea>
          </div>
          <button id="agent-form-submit">Send</button>
        </div>
      </div>
    )
  }

  render() {
    this.agent = this.history.location.state.agent;
    let html = this.generateAgentHTML();

    return (
      <div>
        <div class="back">
          <span></span>
        </div>
        {html}
      </div>
    );
  }
}
