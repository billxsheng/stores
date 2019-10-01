//a reducer is just a js function
//takes two parameters: current state and an action
//usually, local state changes in place with setstate
//in redux, the state is immutable and cannot change in place

//reducer returning the initial state

const initialState = {
    articles: []
};

function rootReducer(state = initialState, action) {
    return state;
}

export default rootReducer
