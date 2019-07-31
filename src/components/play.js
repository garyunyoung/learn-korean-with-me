import React from "react";
import { Link } from "react-router-dom";

export default class Learn extends React.Component {
  render() {
    return (
      <div>
        <h1>play category</h1>
        <ul>
          <li>
            <Link to="/play/game">Vowels</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    );
  }
}
