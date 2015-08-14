import { register } from '../dispatchers/ApplicationDispatcher';
import EventEmitter from 'events';
import ActionTypes from '../constants/ActionTypes';

export default class ApplicationStore extends EventEmitter {
  constructor() {
    super();
    this.data = {};
  }

  subscribe(actionSubscribe) {
    this._dispatchToken = register(actionSubscribe());
  }

  addChangeListener(callback) {
    this.on('STORE_CHANGE', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('STORE_CHANGE', callback);
  }

  get(key) {
    return this.data[key];
  }

  set(key, value) {
    this.data[key] = value;
    this.emitChange('STORE_CHANGE');
  }

  remove(key) {
    this.data.delete(key);
    this.emitChange('STORE_CHANGE');
  }

  setAll(items) {
    this.data = new Set(items);
    this.emitChange('STORE_CHANGE');
  }

  emitChange() {
    this.emit('STORE_CHANGE');
  }

  getAll() {
    return Array.from(this.data);
  }
}

ApplicationStore.dispatchToken = null;
