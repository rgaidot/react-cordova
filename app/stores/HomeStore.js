import ApplicationStore from './ApplicationStore';
import ActionTypes from '../constants/ActionTypes';

class HomeStore extends ApplicationStore {
  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
  }

  _registerToActions(action) {
    switch(action.type) {
      case ActionTypes.API_SERVICE_SUCCESS:
        this.setAll(action.body.contacts);
        break;
      default:
        break;
    }
    this.emitChange();
  };
}

export default new HomeStore();
