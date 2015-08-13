import 'babel-core/polyfill';
import React from 'react';
import Router from 'react-router';
import Routes from './config/Routes';
import ApplicationStore from './stores/ApplicationStore';
import '../app/assets/scss/style.scss';
import '../bower_components/ratchet/dist/css/ratchet.min.css';
import '../bower_components/ratchet/dist/css/ratchet-theme-ios.min.css';

Router.run(Routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler />, document.body);
});
