import React from "react";
import { Link } from "react-router-dom";
import "./chat.scss";

export default class Chat extends React.Component {
  constructor(props) {
    super();
    this.state = {
      step: 0,
      previousStep: [],
      response: chatbotData,
      renderedResponse: [],
      user: "",
      input: ""
    };
  }

  componentDidMount() {
    this.nextStep();
  }

  handleInputData = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit(e) {
    this.nextStep();
    e.preventDefault();
  }

  nextStep() {
    this.renderResponse();
    this.setState(prevState => {
      const nextStep =
        prevState.step < prevState.response.length - 1
          ? prevState.step + 1
          : null;

      return {
        step: nextStep,
        user: prevState.response[nextStep].user
      };
    });
  }

  renderResponse() {
    if (this.state.user === "input") {
      this.setState(prevState => {
        return {
          renderedResponse: [
            ...prevState.renderedResponse,
            { user: true, response: prevState.input }
          ]
        };
      });
    } else {
      this.setState(prevState => {
        const response = chatbotData[prevState.step];
        return {
          renderedResponse: [...prevState.renderedResponse, response]
        };
      });
    }
  }

  render() {
    return (
      <div>
        <h1>chat</h1>
        <div className="chat-box">
          <div className="chat-bot">
            {this.state.renderedResponse.map(response => {
              if (!response.user) {
                return (
                  <div className="chat-bot-response">
                    <div className="chat-bot-profile-pic" />
                    {response.response}
                  </div>
                );
              } else {
                return (
                  <div className="chat-bot-response chat-bot-response--right">
                    <div className="chat-bot-profile-pic" />
                    {response.response}
                  </div>
                );
              }
            })}
          </div>
          <div className="user">
            {this.state.user === "input" ? (
              <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                  <input type="text" onChange={this.handleInputData} />
                  <input type="submit" value="submit" />
                </form>
              </div>
            ) : (
              <button onClick={() => this.nextStep()}>
                {this.state.user
                  ? `${this.state.response[this.state.step].response}`
                  : "next"}
              </button>
            )}
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

const chatbotData = [
  {
    step: 0,
    response: "chat-bot: hello!"
  },
  {
    step: 1,
    response: "chat-bot:how are you?"
  },
  {
    step: 2,
    response: "user: i am great, thanks",
    user: "option"
  },
  {
    step: 3,
    response: "user: you?",
    user: "option"
  },
  {
    step: 4,
    response: "chat-bot: i am great! ... what is your name?"
  },
  {
    step: 5,
    response: "",
    user: "input"
  },
  {
    step: 6,
    response: "chat-bot: nice to meet you!"
  },
  {
    step: 7,
    response: "chat-bot: would you like to keep chatting?"
  },
  {
    step: 8,
    response: "no sorry",
    user: "option"
  },
  {
    step: 9,
    response: "chat-bot: bye!"
  }
];
