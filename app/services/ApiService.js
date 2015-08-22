import ApplicationDispatcher from '../dispatchers/ApplicationDispatcher';

import request from 'request';
import bluebird from 'bluebird';

export default class ApiService {
  get (options = {}) {
    if (!options.url) {
      throw new Error('You forgot to specify url.');
    }
    return new bluebird( (resolve, reject) => {
      request.get(
        {
          url: options.url,
          body: options.data,
          headers: options.headers,
          json: true,
          withCredentials: false
        },
        (err, response, body) => {
          if(err){
            return reject(err);
          }
          if(response.statusCode >= 400){
            return reject(body);
          }
          return resolve(body);
        }
      );
    });
  }
  post (options = {}) {
    if (!options.url) {
      throw new Error('You forgot to specify url.');
    }
    return new bluebird( (resolve, reject) => {
      request.post(
        {
          url: options.url,
          body: options.data,
          headers: options.headers,
          json: true,
          withCredentials: false
        },
        (err, response, body) => {
          if(err){
            return reject(err);
          }
          if(response.statusCode >= 400){
            return reject(body);
          }
          return resolve(body);
        }
      );
    });
  }
};

export default new ApiService();
