// AddToCartButton.test.js

import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";
import AddToCartButton from "./ConntectedToContext";
import context from "./components/__mocks__/testHelper";

configure({ adapter: new Adapter() });
jest.mock("./components/Provider");

test("function called on click", () => {
  const component = mount(<AddToCartButton />);
  component.find("button").simulate("click");
  expect(context.onAddToCartClick.mock.calls.length).toBe(1);
});

export default {};
