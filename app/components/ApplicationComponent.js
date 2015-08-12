import React, { Component } from 'react';
import { RouteHandler, Link } from 'react-router';
import ApplicationActions from '../actions/ApplicationActions';

export default class ApplicationComponent extends Component {
  render() {
    return <div>
        <header className='grey'>
          <h1>react-cordova</h1>
        </header>
        <section id='main'>
          <RouteHandler />
        </section>
        <footer className='grey'>
          <ul className='unstyled'>
            <li><Link to="home">Home</Link></li>
          </ul>
        </footer>
     </div>;
  }
};
