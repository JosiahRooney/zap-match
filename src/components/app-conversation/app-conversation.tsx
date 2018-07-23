import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
    tag: 'app-conversation',
    styleUrl: 'app-conversation.scss'
})
export class AppConversation {
  @Prop() history: RouterHistory;
  message: String = '';
  agent: any;

  constructor() {
  }

  componentDidLoad() {
    
  }

  render() {
    this.message = this.history.location.state.message;
    this.agent = this.history.location.state.agent;

    console.log(this.agent)

    return (
      <div class="app-conversation">
        <div class="conversation-bar">
          <div class="back-button"></div>
          <div class="profile">
            <img src={this.agent.photoLarge} alt=""/>
            <p>{this.agent.name}</p>
          </div>
        </div>
        <div class="conversation">
          <div class="conversation-bubble right-bubble">
            <p>{this.message}</p>
          </div>
          <div class="conversation-bubble left-bubble">
            <p>···</p>
          </div>
        </div>
        <div class="conversation-overlay">
          <div class="conversation-overlay__inner">
            <p>Enter your email address to continue the conversation</p>
            <input type="text" placeholder="Email address" />
          </div>
        </div>
      </div>
    );
  }
}
