import React from "react";
import { Link } from "react-router-dom";
import "./chat.scss";

export default class Chat extends React.Component {
  render() {
    return (
      <div>
        <h1>chat</h1>
        <div className="chat-box">
          <div className="chat-bot">
            <div className="chat-bot-response">chat response one</div>
            <div className="chat-bot-response">chat response two</div>
            <div className="chat-bot-response">chat response three</div>
          </div>
          <div className="user">
            <div className="user-response">user response one</div>
          </div>
        </div>

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
