import React from "react";
import { connect } from "react-redux";

//maps state of store to the props of the component
//gets the state we need from the store
const mapStateToProps = state => {
  return { articles: state.articles };
};

//list component recieves prop articles which is a copy of articles array in redux state, comes from reducer
const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

//connects react component with redux store
const List = connect(mapStateToProps)(ConnectedList);

export default List;