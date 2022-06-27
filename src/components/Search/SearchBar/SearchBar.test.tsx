import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

afterEach(cleanup);

// Integration Search Input Tests
test("search input should render and work properly", async () => {
  render(<SearchBar searchHandler={() => null} />);
  const inputElement = (await screen.findByTestId(
    "search-input",
  )) as HTMLInputElement;
  const testValue = "test";
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toBeEnabled();
  expect(inputElement.value).toBe("");
  fireEvent.change(inputElement, { target: { value: testValue } });
  expect(inputElement.value).toHaveLength(testValue.length);
  expect(inputElement.value).toBe(testValue);
});

// Integration Search Button Tests
test("search button should render and work properly", async () => {
  render(<SearchBar searchHandler={() => null} />);
  const buttonElement = (await screen.findByTestId(
    "search-button",
  )) as HTMLButtonElement;
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toBeEnabled();
  userEvent.click(buttonElement);
});
