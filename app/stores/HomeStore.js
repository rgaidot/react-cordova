import ApplicationStore from './ApplicationStore';
import ApplicationDispatcher from '../dispatcher/ApplicationDispatcher';

import { STORE_CHANGE } from '../constants/ApplicationConstants';

class HomeStore extends ApplicationStore {
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

ApplicationDispatcher.register((action) => {
  switch(action.actionType) {
    case STORE_CHANGE:
      store.setAll(action.items);
      break;
    default:
  }
});

export default store;
