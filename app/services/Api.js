import jQuery from 'jquery';
import ApplicationDispatcher from '../dispatcher/ApplicationDispatcher';

export default class Api {
  get (url) {
    jQuery.ajax(url).then(function(response) {
      ApplicationDispatcher.dispatch({type: "STORE_CHANGE",
                                     state: "ready", content: response});
    }).fail(function(response){
      console.log('ERR', response);
    })
  }
};

export default new Api();
