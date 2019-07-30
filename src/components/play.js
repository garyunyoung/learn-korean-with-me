import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      answerFeedback: "",
      correctAnswerCounter: 0,
      incorrectAnswerCounter: 0,
      cheatsheet: [],
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

    fetch("http://localhost:9000/hanguel")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (this.state.apiResponse.hanguel === res.hanguel) {
          this.callAPI(tries + 1);
        } else {
          this.setState({ apiResponse: res });
        }
      })
      .catch(err => console.error(err));

    fetch("http://localhost:9000/cheatsheet")
      .then(res => res.json())
      .then(res => {
        this.setState({ cheatsheet: res });
      })
      .catch(err => console.error(err));
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
        correctAnswerCounter: prevState.correctAnswerCounter + 1,
        incorrectAnswerCounter: 0,
        cheatsheetIsOpen: false
      };
    });
    this.form.current.reset();
    this.callAPI();
  }

  incorrectAnswer() {
    this.setState((prevState, _props) => {
      return {
        answerFeedback: "Incorrect answer, try again :)",
        correctAnswerCounter: prevState.correctAnswerCounter - 1,
        incorrectAnswerCounter: prevState.incorrectAnswerCounter + 1
      };
    });
    this.form.current.reset();
  }

  openCheatsheet() {
    this.setState({
      cheatsheetIsOpen: true
    });
  }

  render() {
    return (
      <div className="play">
        <h1>play</h1>
        <p>{this.state.apiResponse.hanguel}</p>
        <form ref={this.form} onSubmit={e => this.handleSubmit(e)}>
          <input type="text" ref={this.input} autoFocus />
          <input type="submit" value="submit" />
        </form>
        <p>{this.state.answerFeedback}</p>
        <p>streak: {this.state.correctAnswerCounter}</p>
        <Link to="/">Home</Link>
        <Cheatsheet
          cheatsheet={this.state.cheatsheet}
          isOpen={this.state.cheatsheetIsOpen}
          incorrectAnswerCounter={this.state.incorrectAnswerCounter}
          openCheatsheet={() => this.openCheatsheet()}
        />
      </div>
    );
  }
}

export function Cheatsheet(props) {
  const isOpen = props.isOpen;
  const openCheatsheet = props.openCheatsheet;
  const incorrectAnswerCounter = props.incorrectAnswerCounter;

  if (incorrectAnswerCounter <= 2) {
    return null;
  } else if (isOpen) {
    return (
      <div>
        <h1>Cheatsheet</h1>
        {props.cheatsheet.map(char => {
          return (
            <ul>
              <li>{char.hanguel}</li>
              <li>{char.romanisation}</li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return (
      <button className="open-cheatsheet" onClick={openCheatsheet}>
        cheatsheet
      </button>
    );
  }
}
