import { ADD_ARTICLE } from "../constants/action-types";

//a reducer is just a js function
//takes two parameters: current state and an action
//usually, local state changes in place with setstate
//in redux, the state is immutable and cannot change in place

//reducer returning the initial state

const initialState = {
    articles: []
};

//this function does not work because the state is immutable and array.push() alters the original array
//mutating original action object
// function rootReducer(state = initialState, action) {
//     if(action.type === ADD_ARTICLE) {
//         state.articles.push(action.payload);
//     }
//     return state;
// }

//Object.assign keeps the original state immutable and returns new state object
//concat keeps array immutable
function rootReducer(state = initialState, action) {
    if(action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    return state
}

//avoid mutations
//use concat, slice, and spread for arrays
//use assign and spread for object

export default rootReducer
