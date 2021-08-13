import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelCaseWithSpaces } from "./App";

//functional tests

test("button has the correct intial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(colorButton).toHaveTextContent("Change to MediumVioletRed");
});

test("initial checkbox condition", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  expect(colorButton).toBeEnabled();
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox disable and enable button", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  expect(colorButton).toBeEnabled();
  const checkbox = screen.getByRole("checkbox", {
    id: "enable-button-checkbox",
  });
  expect(checkbox).not.toBeChecked();
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("checkbox disable and enable button and turn the button gray if it is disable", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  expect(colorButton).toBeEnabled();
  const checkbox = screen.getByRole("checkbox", {
    id: "enable-button-checkbox",
  });
  expect(checkbox).not.toBeChecked();
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelCaseWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letters", () => {
    expect(replaceCamelCaseWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelCaseWithSpaces("MediumVioletRed")).toBe(
      "Medium Violet Red"
    );
  });
});
