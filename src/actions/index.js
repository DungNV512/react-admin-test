import request from 'superagent';
var axios = require('axios');

const API_URL_GIF = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY_GIF = '&api_key=dc6zaTOxFJmzC';

const API_URL = 'http://5play.mobi/news/test/report/demographic?q=';
const API_KEY = 'age';
const API_KEY_GENDER = 'gender';
//var user = require('../constants/user.json');
/*<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDx3d4wKk0jfzF_cd-nd6jYdTz1Zu34Jgo&callback=initMap"
  type="text/javascript"></script>*/
// action type
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const REQUEST_GIFS = 'REQUEST_GIFS';
export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const AUTHOR_USER = 'AUTHOR_USER';

export const REQUEST_AGES = 'REQUEST_AGES';
export const REQUEST_GENDER = 'REQUEST_GENDER';
export const REQUEST_GEOMAP = 'REQUEST_GEOMAP';
export const REQUEST_LOCATION_BY_CITY = 'REQUEST_LOCATION_BY_CITY';
// action creator
export function requestGifs(term = null) {
  const data = request.get(`${API_URL_GIF}${term.replace(/\s/g, '+')}${API_KEY_GIF}`);
  // action
  return {
    type: REQUEST_GIFS,
    payload: data
  }
}

export function requestAges() {
  const data1 = request.get(`${API_URL}${API_KEY}`);
  const data = axios.get('http://5play.mobi/news/test/report/demographic?q=age');
  return {
    type: REQUEST_AGES,
    payload: data
  }
}

export function requestLocationByCity() {
  const data = axios.get('http://5play.mobi/news/test/report/locationbycity?size=10&start=1499305956000&end=1499392356000');
  return {
    type: REQUEST_LOCATION_BY_CITY,
    payload: data
  }
}

export function requestGeomap() {
  const data = [
    {
    markers: {
      position: {
        lng: 109.17584113776684,
        lat: 12.249999940395355
      }
    },
    doc_count: 23781,
    key: "w6jt",
    defaultAnimation: 2,
  },
  {
    markers: {
      position: {
        lng: 105.84999985992908,
        lat: 21.03329828940332
      }
    },
    doc_count: 1336650,
    key: "w7er",
    defaultAnimation: 2,
  },
  {
    markers: {
      position: {
        lng: 106.64379995316267,
        lat: 10.814199959859252
      }
    },
    doc_count: 482827,
    key: "w3gv",
    defaultAnimation: 2,
  }
  ];
  const data1 = axios.get('http://5play.mobi/news/test/report/location?start=1499305956000&end=1499392356000');
  return {
    type: REQUEST_GEOMAP,
    payload: data1
  }
}


export function requestGender() {
  const data = axios.get(`http://5play.mobi/news/test/report/demographic?q=gender`);

  return {
    type: REQUEST_GENDER,
    payload: data
  }
}

export function openModal(gif) {
  return {
    type: OPEN_MODAL,
    gif
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

export function signInUser(email = null) {
  return {
    type: SIGN_IN_USER,
    payload: email.privilege
  }
}

export function signOutUser() {
  return {
    type: SIGN_OUT_USER
  }
}
