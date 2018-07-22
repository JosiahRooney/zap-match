import { Component } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})
export class AppRoot {
  
  render() {
    return (
      <div>
        {/* <header>
          <div>
            <h1>
              <stencil-route-link url='/' exact={true}>
                ZapMatch
              </stencil-route-link>
            </h1>
          </div>
        </header> */}

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
              <stencil-route url='/questions/:coords' component='app-questions' />
              <stencil-route url='/results' component='app-results' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
