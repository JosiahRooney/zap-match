import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import GoogleMapsLoader from 'google-maps';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {
  @Prop() history: RouterHistory;
  autocomplete: any;
  locationInfo: any;
  place: any;
  map: any;
  marker: any;
  input: HTMLInputElement;
  nextBtn: HTMLElement;
  
  constructor() {
    GoogleMapsLoader.KEY = 'AIzaSyDyzpVnlt5xY5GBItSQkyJpKOR2AlupIQI';
    GoogleMapsLoader.LIBRARIES = ['places'];

    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
  }

  handleKeyDown(evt) {
    if (evt.key === 'Enter') {
      if (document.activeElement != document.body) {
        (document.activeElement as HTMLElement).blur();
      };
    }
  }

  handleNextButtonClick() {
    if (this.locationInfo === undefined) {
      // show error notification
      return false;
    }

    // navigation to questions page
    this.history.push({
      pathname: `/questions`, 
      state: {
        locationInfo: this.locationInfo
      }
    });
  }

  bindEvents() {
    this.input = document.querySelector('#app-location');
    this.nextBtn = document.querySelector('#app-next');
    const mapElement = document.querySelector('#app-map');

    this.input.addEventListener('keydown', this.handleKeyDown);
    this.nextBtn.addEventListener('click', this.handleNextButtonClick);

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
        this.map = new google.maps.Map(mapElement, {
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

        // update this.locationInfo
        this.locationInfo = {
          city: this.place.name,
          coords: latLng
        }

        // show next button
        if (this.locationInfo.city !== '') {
          this.nextBtn.classList.remove('hide');
        } else {
          this.nextBtn.classList.add('hide');
        }
      });
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
            <img src="assets/images/group-4.png" alt=""/>
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

          <button class="hide" id="app-next">Next</button>
          
        </div>

        <div class="map" id="app-map"></div>
      </div>
    );
  }
}