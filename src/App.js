import React from "react";
import "./App.scss";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: ""
    };
  }

  componentWillMount() {
    this.callAPI();
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {this.state.apiResponse.type}: {this.state.apiResponse.character}
          </p>
          <p>hanguel: {this.state.apiResponse.hanguel}</p>
          <button onClick={() => this.callAPI()}>fetch</button>
        </header>
      </div>
    );
  }
}
