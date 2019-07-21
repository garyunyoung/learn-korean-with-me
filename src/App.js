import React from "react";
import "./App.scss";
import { throwStatement } from "@babel/types";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      answerFeedback: "",
      counter: 0,
      cheatsheet: "",
      cheatsheetIsOpen: false
    };
    this.input = React.createRef();
    this.form = React.createRef();
  }

  componentWillMount() {
    this.callAPI();
  }

  callAPI(tries = 0) {
    if (tries > 4) {
      return;
    }

    fetch("http://localhost:9000/testAPI")
      .then(res => res.json())
      .then(res => {
        if (this.state.apiResponse.hanguel === res.hanguel) {
          this.callAPI(tries + 1);
        } else {
          this.setState({ apiResponse: res });
        }
      });

    fetch("http://localhost:9000/cheatsheet")
      .then(res => res.json())
      .then(res => {
        {
          this.setState({ cheatsheet: res });
        }
      });
  }

  handleSubmit(event) {
    const input = this.input.current.value;
    const romanisation = this.state.apiResponse.romanisation;
    event.preventDefault();

    if (input === romanisation) {
      this.correctAnswer();
    } else {
      this.incorrectAnswer();
    }
  }

  correctAnswer() {
    this.setState((prevState, _props) => {
      return {
        answerFeedback: "Correct!",
        counter: prevState.counter + 1
      };
    });
    this.form.current.reset();
    this.callAPI();
  }

  incorrectAnswer() {
    this.setState({
      answerFeedback: "Incorrect answer, try again :)",
      counter: 0
    });
    this.form.current.reset();
  }

  openCheatsheet() {
    this.setState({
      cheatsheetIsOpen: true
    });
  }

  closeCheatsheet() {
    this.setState({
      cheatsheetIsOpen: false
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.apiResponse.hanguel}</p>
          <form ref={this.form} onSubmit={e => this.handleSubmit(e)}>
            <input type="text" ref={this.input} />
            <input type="submit" value="submit" />
          </form>
          <p>{this.state.answerFeedback}</p>
          <p>streak: {this.state.counter}</p>
          <Cheatsheet
            isOpen={this.state.cheatsheetIsOpen}
            openCheatsheet={() => this.openCheatsheet()}
            closeCheatsheet={() => this.closeCheatsheet()}
          />
        </header>
      </div>
    );
  }
}

export function Cheatsheet(props) {
  const isOpen = props.isOpen;
  if (!isOpen) {
    return (
      <button className="open-cheatsheet" onClick={props.openCheatsheet}>
        cheatsheet
      </button>
    );
  } else {
    return (
      <div>
        <h1>Cheatsheet</h1>
        <button className="close-cheatsheet" onClick={props.closeCheatsheet}>
          close
        </button>
      </div>
    );
  }
}
