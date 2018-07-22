import { Component } from '@stencil/core';
import GoogleMapsLoader from 'google-maps';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  bindEvents() {
    const input = document.querySelector('#app-location');
    input.addEventListener('change', () => {

    });
  }

  componentDidLoad() {
    GoogleMapsLoader.KEY = 'AIzaSyDyzpVnlt5xY5GBItSQkyJpKOR2AlupIQI';
    GoogleMapsLoader.LIBRARIES = ['places'];
    GoogleMapsLoader.load((google) => {
      console.log(google)
      const input = document.querySelector('#app-location');
      new google.maps.places.Autocomplete(input);
    })

    this.bindEvents();
  }

  render() {
    let copy = 'Welcome! Choosing a real estate agent can be an overwhelming process. We are here to make it simple. Connect with an agent who is eager to help and get started on the journey to finding your dream home by answering a few quick questions.';
    let secondaryCopy = 'Where are you looking to buy a home?';
    let coords = JSON.stringify({
      n: 32.7157,
      w: 117.1611
    });

    return (
      <div class='app-home'>

        <p>
          {copy}
        </p>

        <div class="form">
          <p>
            {secondaryCopy}
          </p>
          <input type="text" id="app-location" placeholder="Enter your location" />
          <div class="dummy-data">
            <ul>
              <li><stencil-route-link url={`/questions/${coords}`}><span>San</span> Diego, CA</stencil-route-link></li>
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