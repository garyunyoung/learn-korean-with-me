import React from "react";
import { Link } from "react-router-dom";
import octopus from "../images/octopus.svg";

export default class Learn extends React.Component {
  render() {
    return (
      <div>
        <h1>play category</h1>
        <img src={octopus} width="100" alt="octopus" />
        <ul>
          <li>
            <Link to="/play/game">Alphabet</Link>
          </li>
          <li>
            <Link to="/play/game">Greetings</Link>
          </li>
          <li>
            <Link to="/play/game">Songs</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    );
  }
}
