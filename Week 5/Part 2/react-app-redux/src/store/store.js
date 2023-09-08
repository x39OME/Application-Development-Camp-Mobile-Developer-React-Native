import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import combineReducers from './reducers/combine.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store=createStore(combineReducers,composeWithDevTools(applyMiddleware(thunk)));

export default store;
