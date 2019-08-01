import React from "react";
import { Link } from "react-router-dom";
import "./chat.scss";

export default class Chat extends React.Component {
  constructor(props) {
    super();
    this.state = {
      step: 0,
      response: chatbotData,
      renderedResponse: [],
      user: false,
      input: "",
      end: false
    };
  }

  componentDidMount() {
    this.renderResponse();
  }

  handleInputData = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit(e) {
    this.setState(prevState => {
      return {
        renderedResponse: [...prevState.renderedResponse, prevState.input]
      };
    });
    this.nextStep();
    e.preventDefault();
  }

  nextStep() {
    this.setState(prevState => {
      const nextStep =
        prevState.step < prevState.response.length - 1 ? prevState.step + 1 : 0;

      return {
        step: nextStep,
        user: prevState.response[nextStep].user,
        end: prevState.response[nextStep].end
      };
    });
    this.renderResponse();
    this.endChat();
  }

  renderResponse() {
    this.setState(prevState => {
      const response = chatbotData[prevState.step].response;
      return {
        renderedResponse: [...prevState.renderedResponse, response]
      };
    });
  }

  endChat() {
    if (this.state.end === true) {
      this.setState({ renderedResponse: [] });
    }
  }

  render() {
    return (
      <div>
        <h1>chat</h1>
        <div className="chat-box">
          <div className="chat-bot">
            {this.state.renderedResponse.map(response => {
              return (
                <div className="chat-bot-response">
                  <div className="chat-bot-profile-pic" />
                  {response}
                </div>
              );
            })}
          </div>
          <div className="user">
            {this.state.user ? (
              <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                  <input type="text" onChange={this.handleInputData} />
                  <input type="submit" value="submit" />
                </form>
              </div>
            ) : (
              <button onClick={() => this.nextStep()}>next</button>
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
    response: "hello!",
    user: false
  },
  {
    step: 1,
    response: "how are you?",
    user: false
  },
  {
    step: 2,
    response: "user: i am great, thanks",
    user: false
  },
  {
    step: 3,
    response: "user: you?",
    user: false
  },
  {
    step: 4,
    response: "i am great! ... what is your name?",
    user: true
  },
  {
    step: 5,
    response: "nice to meet you!",
    user: false
  },
  {
    step: 6,
    response: "would you like to keep chatting?",
    user: false,
    options: [{ option: "yes", step: 0 }, { option: "no", step: 6 }]
  },
  {
    step: 7,
    response: "bye!",
    user: false,
    end: true
  }
];
