import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  bindEvents() {
    
  }

  render() {
    let copy = 'Welcome! Choosing a real estate agent can be an overwhelming process. We are here to make it simple. Connect with an agent who is eager to help and get started on the journey to finding your dream home by answering a few quick questions.';

    return (
      <div class='app-home'>
        {/* <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDyzpVnlt5xY5GBItSQkyJpKOR2AlupIQI&libraries=places"></script> */}

        <p>
          {copy}
        </p>

        <div class="form">
          <input type="text" id="app-location" placeholder="Enter your location" value='San' />
          <div class="dummy-data">
            <ul>
              <li><stencil-route-link url="/questions"><span>San</span> Diego, CA</stencil-route-link></li>
              <li><a href="#"><span>San</span> Francisco, CA</a></li>
              <li><a href="#"><span>San</span> Jose, CA</a></li>
              <li><a href="#"><span>San</span>ta Cruz, CA</a></li>
              <li><a href="#"><span>San</span>ta Rosa, CA</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
