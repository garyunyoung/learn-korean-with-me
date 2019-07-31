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
            <ChatbotResponse />
            <ChatbotResponse />
            <ChatbotResponse />
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

function ChatbotResponse() {
  return (
    <div className="chat-bot-response">
      <div className="chat-bot-profile-pic" />
      chat response one
    </div>
  );
}
