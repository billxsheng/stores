import { createStore } from "redux";
import rootReducer from " ../reducers/index";

//creating store, takes a reducer as first argument
//the state in redux comes from reducers; reducers produce the state of your application
const store = createStore(rootReducer);

export default store;