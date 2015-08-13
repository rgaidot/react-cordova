import ApplicationStore from './ApplicationStore';
import ApplicationDispatcher from '../dispatcher/ApplicationDispatcher';

import { STORE_CHANGE } from '../constants/ApplicationConstants';

class HomeStore extends ApplicationStore {
  constructor() {
    super();
  }

  emitChange() {
    this.emit(STORE_CHANGE);
  }

  addChangeListener(callback) {
    this.on(STORE_CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(STORE_CHANGE, callback);
  }
}

let store = new HomeStore();


store.dispatchToken = ApplicationDispatcher.register((action) => {
  switch(action.type) {
    case STORE_CHANGE:
      store.setAll(action.content.contacts);
      break;
    default:
      return;
  }
  store.emitChange();
});

export default store;
