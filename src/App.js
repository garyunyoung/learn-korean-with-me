import React from "react";
import { Link } from "react-router-dom";
import turtle from "./images/turtle.svg";
import "./App.scss";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>learn 한글 with me!</h1>
          <img src={turtle} width="150" />
        <ul>
          <li>
            <Link to="/learn">Learn</Link>
          </li>
          <li>
            <Link to="/play">Play</Link>
          </li>
        </ul>
      </div>
    );
  }
}
