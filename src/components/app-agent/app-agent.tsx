import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-agent',
  styleUrl: 'app-agent.scss'
})
export class AppAgent {
  @Prop() history: RouterHistory;
  agent: any;

  componentDidLoad() {
    console.log(this.agent);
  }

  generateAgentHTML() {
    let placeholder = `Hi ${this.agent.name.split(' ')[0]}, I'm looking to buy a home in San Francisco and hoping you can help me with the process.`;
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
              ★<br />
              Matching Point
            </div>
            <div class="compatibility-metric">
              ⚫<br />
              Compatibility Metric
            </div>
            <div class="compatibility-metric">
              🔺<br />
              Other Metric
            </div>
          </div>
        </div>
        <div class="agent__form">
          <div class="text-box">
            <textarea name="agent-form-textarea" id="agent-form-textarea" placeholder={placeholder}></textarea>
          </div>
          <button>Send</button>
        </div>
      </div>
    )
  }

  render() {
    this.agent = this.history.location.state.agent;
    let html = this.generateAgentHTML();

    return (
      <div>
        {html}
      </div>
    );
  }
}
