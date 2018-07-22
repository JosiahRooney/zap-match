import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-results',
  styleUrl: 'app-results.css'
})

export class AppResults {
  @Prop() history: RouterHistory;
  state: any = {};
  coords: Object;
  answers: Object;

  componentDidLoad() {
    this.state = history.state.state;
    this.coords = JSON.parse(this.state.coords);
    this.answers = this.state.answers;
  }

  render() {
    return (
      <div>
        <p></p>
      </div>
    );
  }
}
