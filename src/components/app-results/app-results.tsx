import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import tsdom from 'tsdom';

@Component({
  tag: 'app-results',
  styleUrl: 'app-results.scss'
})

export class AppResults {
  @Prop() history: RouterHistory;
  state: any = {};
  city: String;
  coords: Object;
  answers: Object;
  agents: Array<any> = [
    {
      name: 'Chris B.',
      city: 'Oakland, CA',
      reviews: 34,
      match: 95,
      photo: 'assets/images/chris.png',
      photoLarge: 'assets/images/chris-big.png'
    },
    {
      name: 'Jane R.',
      city: 'Oakland, CA',
      reviews: 19,
      match: 90,
      photo: 'assets/images/jane.png'
    },
    {
      name: 'Jose P.',
      city: 'Oakland, CA',
      reviews: 5,
      match: 80,
      photo: 'assets/images/jose.png'
    }
  ];
  currentAgent: Number;
  currentAgentObj: Object;
  viewMoreBtns: Array<any> = [];

  constructor() {
    this.handleViewMoreBtnClick = this.handleViewMoreBtnClick.bind(this);
  }

  handleViewMoreBtnClick(num) {
    this.currentAgent = num;
    this.currentAgentObj = this.agents[Number(this.currentAgent)];
    console.log(this.currentAgentObj)
    this.history.push({
      pathname: `/agent`,
      state: {
        agent: this.currentAgentObj
      }
    });
  }

  bindEvents() {
    this.viewMoreBtns.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        this.handleViewMoreBtnClick(idx);
      });
    });
  }

  componentDidLoad() {
    this.state = history.state.state;
    this.coords = this.state.coords;
    this.city = this.state.city;
    this.answers = this.state.answers;

    // console.log(this);

    // this is where we would calculate the data and then display a list of agents
    let viewMoreBtns = tsdom('.agent-card__view-more div');
    viewMoreBtns.each((btn) => {
      this.viewMoreBtns.push(btn);
    });
    this.bindEvents();
  }

  generateAgentCardHTML() {
    let agentCards = [];
    this.agents.forEach((agent) => {
      let html = (
        <div class="agent-card">
          <div class="agent-card__info">
            <div class="agent-card__photo">
              <img src={agent.photo} alt="" />
            </div>
            <div class="agent-card__center">
              <div class="agent-card__name">
                <p>{agent.name}</p>
              </div>
              <div class="agent-card__city">
                <p>{agent.city}</p>
              </div>
              <div class="agent-card__reviews">
                <p>⭐⭐⭐⭐⭐ ({agent.reviews} reviews)</p>
              </div>
            </div>
            <div class="agent-card__match">
              <div class="big">{agent.match}%</div>
              <p class="small">Match</p>
            </div>
          </div>
          <div class="agent-card__view-more">
            <div>View More</div>
          </div>
        </div>
      );
      agentCards.push(html);
    });
    return agentCards;
  }

  render() {
    let agentCards = this.generateAgentCardHTML();
    return (
      <div class="app-results">
        <p>You matched with these agents:</p>
        {agentCards}
      </div>
    );
  }
}
