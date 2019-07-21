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
  expect(wrapper.contains(<Cheatsheet isOpen={false} />)).toEqual(true);
});

it("opens cheatsheet when cheatsheet button is clicked", () => {
  const wrapper = shallow(<App />);
  const cheatsheetButton = wrapper.find(".cheatsheet-button");
  cheatsheetButton.simulate("click");

  expect(wrapper.contains(<Cheatsheet isOpen={true} />)).toEqual(true);
});
