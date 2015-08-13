import ApplicationDispatcher from '../dispatcher/ApplicationDispatcher';
import ApplicationConstants from '../constants/ApplicationConstants';
import EventEmitter from 'events';

export default class ApplicationStore extends EventEmitter {
  constructor() {
    super();
    this.data = {};
  }

  get(key) {
    return this.data[key];
  }

  set(key, value) {
    this.data[key] = value;
    this.emitChange();
  }

  remove(key) {
    this.data.delete(key);
    this.emitChange();
  }

  setAll(items) {
    this.data = new Set(items);
    this.emitChange();
  }

  getAll() {
    return Array.from(this.data);
  }
}

ApplicationStore.dispatchToken = null;
