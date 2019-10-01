import { ADD_ARTICLE } from "../constants/action-types";

//reducers are the most imortant concept but how does a reducer know when to produce the next state
//change state by sending a signal (signal is an action)
//the resulting state is a copy of the current state plus new data
//redux actions are js objects
//you need a type property describing how state changes
//payload can be specified
//good practice to wrap all actions within a function called an action creator

export function addArticle(payload) {
    return {type: ADD_ARTICLE, payload};
};