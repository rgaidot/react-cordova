import ApiService from '../services/ApiService';
import { dispatch, dispatchAsync } from '../dispatchers/ApplicationDispatcher';
import { URL } from '../constants/ApplicationConstants';
import ActionTypes from '../constants/ActionTypes';

class HomeActions {
  getContacts() {
    let promise = ApiService.get({url: URL});
    dispatchAsync(promise, {
      request: ActionTypes.API_SERVICE_REQUEST,
      success: ActionTypes.API_SERVICE_SUCCESS,
      failure: ActionTypes.API_SERVICE_FAILURE
    }, { });
  }
}

export default new HomeActions();
