import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import Learn from "./components/learn";
import Chat from "./components/chat";
import Play from "./components/play";
import Game from "./components/game";
import "./index.css";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/learn" component={Learn} />
    <Route exact path="/learn/chat" component={Chat} />
    <Route exact path="/play" component={Play} />
    <Route exact path="/play/game" component={Game} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
