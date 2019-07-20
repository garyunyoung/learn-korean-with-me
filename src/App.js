import React from "react";
import "./App.scss";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      answerFeedback: "",
      counter: 0
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
        </header>
      </div>
    );
  }
}
