import { Component } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})
export class AppRoot {
  
  render() {
    return (
      <div>
        <div class="banner">
          <h1>
            <stencil-route-link url="/" exact={true}>
              ZapMatch
            </stencil-route-link>
          </h1>
        </div>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
              <stencil-route url='/questions' component='app-questions' />
              <stencil-route url='/results' component='app-results' />
              <stencil-route url='/agent' component='app-agent' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
