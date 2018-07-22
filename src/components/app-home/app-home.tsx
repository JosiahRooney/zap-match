import { Component } from '@stencil/core';
import GoogleMapsLoader from 'google-maps';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {
  autocomplete: any;
  place: any;
  map: any;
  marker: any;
  input: HTMLInputElement;
  
  constructor() {
    GoogleMapsLoader.KEY = 'AIzaSyDyzpVnlt5xY5GBItSQkyJpKOR2AlupIQI';
    GoogleMapsLoader.LIBRARIES = ['places'];
  }

  bindEvents() {
    this.input = document.querySelector('#app-location');
    const map = document.querySelector('#app-map');

    GoogleMapsLoader.load((google) => {
      this.autocomplete = new google.maps.places.Autocomplete(this.input);
      this.autocomplete.addListener('place_changed', () => {
        if (this.input.value === '') {
          return false;
        }

        this.place = this.autocomplete.getPlace();
        let latLng = {
          lat: this.place.geometry.location.lat(),
          lng: this.place.geometry.location.lng(),
        }
        this.map = new google.maps.Map(map, {
          center: latLng,
          zoom: 12,
          disableDefaultUI: true
        });

        this.map.setCenter(latLng);
        this.marker = new google.maps.Marker({
          position: latLng,
          map: this.map,
          title: 'Hello world!'
        });
        this.marker.setMap(this.map);
      });
    });

    this.input.addEventListener('focus', () => {

    });
  }

  componentDidLoad() {
    this.bindEvents();
  }

  render() {
    let copy = 'Meet the perfect agent to help you buy a new home!';
    let secondaryCopy = 'Where would you like to live?';

    return (
      <div class='app-home'>

        <div class="banner">
          <div class="banner-images">
            <img src="http://via.placeholder.com/120x120" alt=""/>
            <img src="http://via.placeholder.com/120x120" alt="" />
          </div>
          <p class="primary-copy">
            {copy}
          </p>
        </div>

        <div class="actions">
          <p class="secondary-copy">
            {secondaryCopy}
          </p>

          <div class="form">
            <input type="text" id="app-location" placeholder="Enter your location" />
          </div>

          <button id="app-next">Next</button>
        </div>

        <div class="map" id="app-map"></div>
      </div>
    );
  }
}