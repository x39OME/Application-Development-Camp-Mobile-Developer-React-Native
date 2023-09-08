import {combineReducers} from 'redux';
import LangReducer from'./langReducer.js'
import LoadReducer from './loadReducer.js'
import articlesReducer from './articlesReducers.js';


export default combineReducers({
    lang:LangReducer,
    load:LoadReducer,
    articles:articlesReducer
   
})

