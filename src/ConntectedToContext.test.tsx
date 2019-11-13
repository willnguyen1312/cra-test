// AddToCartButton.test.js

import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";
import AddToCartButton from "./ConntectedToContext";
import context from "./components/__mocks__/testHelper";
import { render, fireEvent } from "@testing-library/react";

configure({ adapter: new Adapter() });
jest.mock("./components/Provider");

beforeEach(() => jest.clearAllMocks());

test("function called on click", () => {
  const component = mount(<AddToCartButton />);
  component.find("button").simulate("click");
  expect(context.onAddToCartClick.mock.calls.length).toBe(1);
});

test("function called on click", () => {
  const { getByText } = render(<AddToCartButton />);
  const button = getByText("Add to Cart");
  fireEvent.click(button);
  expect(context.onAddToCartClick).toHaveBeenCalledTimes(1);
});

export default {};
