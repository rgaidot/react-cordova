import React, { Component } from 'react';
import { RouteHandler, Link } from 'react-router';
import ApplicationActions from '../actions/ApplicationActions';

export default class ApplicationComponent extends Component {
  render() {
    return <div>
        <header className='bar bar-nav'>
          <h1 className='title'>react-cordova</h1>
        </header>
        <section id='main' className='content'>
          <RouteHandler />
        </section>
        <footer className='bar bar-tab'>
          <Link className='tab-item' to="home">
            <span className="icon icon-home"></span>
            <span className="tab-label">Home</span>
          </Link>
        </footer>
     </div>;
  }
};
