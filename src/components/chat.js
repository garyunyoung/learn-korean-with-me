import React from "react";
import { Link } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>chat</h1>
        <ul>
          <li>
            <Link to="/learn">Back</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    );
  }
}
