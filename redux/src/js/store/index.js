import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index.js";
import { forbiddenWordsMiddleware } from "../middleware/index.js";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//creating store, takes a reducer as first argument
//the state in redux comes from reducers; reducers produce the state of your application
const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
);
  
//state of app lives as single immutable object witin store
//as soon as store recieves action, it triggers a reducer 
export default store;