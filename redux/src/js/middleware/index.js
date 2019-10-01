import { ADD_ARTICLE } from "../constants/action-types";

//middleware allows us to intercept actions before they reach the reducer
const forbiddenWords = ["spam", "money"];

//check for forbidden words
//if found, dispatch action found_bad_word, otherwise let it pass
//always return next(action), otherwise no other action will continue
export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === ADD_ARTICLE) {
        
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );

        if (foundWord.length) {
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }
      return next(action);
    };
  };
}