import React from "react";
import "./App.scss";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: ""
    };
    this.input = React.createRef();
  }

  componentWillMount() {
    this.callAPI();
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res }));
  }

  handleSubmit(event) {
    console.log(this.input.current.value);
    event.preventDefault();
    document.querySelector(".form").reset();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {this.state.apiResponse.type}: {this.state.apiResponse.character}
          </p>
          <form className="form" onSubmit={e => this.handleSubmit(e)}>
            <input type="text" ref={this.input} />
            <input type="submit" value="submit" />
          </form>
          <button onClick={() => this.callAPI()}>fetch</button>
        </header>
      </div>
    );
  }
}
