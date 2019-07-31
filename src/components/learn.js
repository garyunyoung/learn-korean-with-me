import React from "react";
import { Link } from "react-router-dom";
import octopus from "../images/octopus.svg";
import "./learn.scss";

export default class Learn extends React.Component {
  render() {
    return (
      <div>
        <h1>learn category</h1>
        <img src={octopus} width="100" alt="octopus" />
        <ul>
          <li>
            <Link to="/learn/chat">Vowels</Link>
          </li>
          <li>
            <Link to="/learn/chat" className="locked">
              Consonant
            </Link>
          </li>
          <li>
            <Link to="/learn/chat" className="locked">
              Greetings
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    );
  }
}
