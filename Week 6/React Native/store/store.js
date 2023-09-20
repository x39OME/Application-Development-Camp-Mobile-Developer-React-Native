import { legacy_createStore as createStore } from "redux";
import Reducer from "./reducers";


const store=createStore(Reducer);

export default store