import Api from '../services/Api';

let url = 'https://addressbook-api.herokuapp.com/contacts';

class HomeActions {
  getContacts() {
    Api.get(url);
  }
}

export default new HomeActions();
