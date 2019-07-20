import React from "react";
import "./App.scss";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      answerFeedback: ""
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
        if (this.state.apiResponse.character === res.character) {
          this.callAPI(tries + 1);
        } else {
          this.setState({ apiResponse: res });
        }
      });
  }

  handleSubmit(event) {
    const input = this.input.current.value;
    const hanguel = this.state.apiResponse.hanguel;
    event.preventDefault();

    if (input === hanguel) {
      this.correctAnswer();
    } else {
      this.incorrectAnswer();
    }
  }

  correctAnswer() {
    this.setState({
      answerFeedback: "Correct!"
    });
    this.form.current.reset();
    this.callAPI();
  }

  incorrectAnswer() {
    this.setState({
      answerFeedback: "Incorrect answer, try again :)"
    });
    this.form.current.reset();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {this.state.apiResponse.type}: {this.state.apiResponse.character}
          </p>
          <form ref={this.form} onSubmit={e => this.handleSubmit(e)}>
            <input type="text" ref={this.input} />
            <input type="submit" value="submit" />
          </form>
          <p>{this.state.answerFeedback}</p>
        </header>
      </div>
    );
  }
}
