import {legacy_createStore as createStore} from 'redux';
import Reducer from './reducer';

const store=createStore(Reducer);

export default store;
