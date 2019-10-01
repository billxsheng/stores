import { createStore } from "redux";
import rootReducer from "../reducers/index.js";

//creating store, takes a reducer as first argument
//the state in redux comes from reducers; reducers produce the state of your application
const store = createStore(rootReducer);

//state of app lives as single immutable object witin store
//as soon as store recieves action, it triggers a reducer 
export default store;