import React, { Component } from 'react';
import HomeStore from '../stores/HomeStore';
import HomeActions from '../actions/HomeActions';

export default class HomeComponent extends Component {
  render() {
    return (
      <div>
        <h2>Welcome!</h2>
      </div>
    );
  }
}

HomeComponent.config = { name: 'home', title: 'Home', path: 'home' };
