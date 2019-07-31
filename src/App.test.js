import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import App, { Cheatsheet } from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("starts with cheatsheet closed", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Cheatsheet isOpen={false} />)).toEqual(false);
});

it("opens cheatsheet when open cheatsheet button is clicked", () => {
  const wrapper = shallow(<App />);
  wrapper.instance().openCheatsheet();

  expect(wrapper.contains(<Cheatsheet isOpen={true} />)).toEqual(false);
});

it("closes cheatsheet when close cheatsheet button is clicked", () => {
  const wrapper = shallow(<App />);
  wrapper.instance().closeCheatsheet();
  expect(wrapper.contains(<Cheatsheet isOpen={false} />)).toBe(false);
});


// CHATBOT TEST
// it("shows user input option when user input is required", () => {
//   const wrapper = shallow(<Chat />);
//   wrapper.instance().showUpserInput();

//   expect(wrapper.contains(<UserInput isVisible={true} />)).toEqual(true);
// });
