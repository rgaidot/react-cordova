import React, { Component } from 'react';
import HomeStore from '../stores/HomeStore';
import HomeActions from '../actions/HomeActions';

function getAppState() {
  return {
    contacts: HomeStore.getAll()
  };
}

export default class HomeComponent extends Component {
  constructor () {
    super();
    this.state = getAppState()
  }

  componentDidMount() {
    HomeActions.getContacts();
    HomeStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    HomeStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(getAppState());
  }

  render() {
    return (
      <div>
        <ul className='table-view'>
        {
          this.state.contacts.map(function(contact) {
            return (
              <li className='table-view-cell media'>
              <img className='media-object pull-left img-resize' src={contact.avatar}/>
              <div className='media-body'>{contact.first} {contact.last}</div>
              </li>
            )
          })
        }
        </ul>
      </div>
    );
  }
}

HomeComponent.config = { name: 'home', title: 'Home', path: 'home' };
