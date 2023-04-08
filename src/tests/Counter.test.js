// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter";

let counter;
let increaseButton;
let decreaseButton;

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
  counter = screen.getByTestId(/count/);
  increaseButton = screen.getByText("+");
  decreaseButton = screen.getByText("-");
});

test("renders counter message", () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByRole("heading")).toHaveTextContent("Counter");
});

test("should render initial count with value of 0", () => {
  // Complete the unit test below based on the objective in the line above
  expect(counter).toHaveTextContent(/0/);
});

test("clicking + increments the count", async () => {
  // Complete the unit test below based on the objective in the line above
  const count = parseInt(counter);
  await userEvent.click(increaseButton);

  //Assert
  expect(parseInt(counter)).toBe(count + 1);
});

test("clicking - decrements the count", async () => {
  const count = parseInt(counter);
  await userEvent.click(decreaseButton);

  //Assert
  expect(parseInt(counter)).toBe(count - 1);
});
