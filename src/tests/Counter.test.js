// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter";

beforeEach(() => 
   { render(<Counter />); });

test('renders counter message', () => 
{
  // Check if the 'counter' text exists as a heading 
  const heading = screen.getByText(/counter/i);
  expect(heading).toBeInTheDocument();

  // Check if the increment '+' and decrement '-' buttons exist
  const incrementButton = screen.getByRole("button", { name: /\+/ });
  const decrementButton = screen.getByRole("button", { name: /-/ });
  expect(incrementButton).toBeInTheDocument();
  expect(decrementButton).toBeInTheDocument();
});

test('should render initial count with value of 0', () => 
{
  // Check if the count value exists and is initialized to zero
  const counterValue = screen.getByTestId("count");
  expect(counterValue).toHaveTextContent("0"); 
});

test('clicking + increments the count', async () => 
{
  // Check for the '+' button and value
  const incrementButton = screen.getByRole("button", { name: /\+/ });
  const counterValue = screen.getByTestId("count");

  // Simulate 1 click of the + button
  await userEvent.click(incrementButton);
  expect(counterValue).toHaveTextContent("1"); 

  // Simulate a second click of the + button to test cumulatively incrementing
  await userEvent.click(incrementButton);
  expect(counterValue).toHaveTextContent("2"); 
});

test('clicking - decrements the count', async () => 
{
  // Check for the '-' button and value
  const decrementButton = screen.getByRole("button", { name: /-/ });
  const counterValue = screen.getByTestId("count");

  // Simulate 1 click of the - button
  await userEvent.click(decrementButton);
  expect(counterValue).toHaveTextContent("-1"); 

  // Simulate a second click of the + button to test cumulatively incrementing
  await userEvent.click(decrementButton);
  expect(counterValue).toHaveTextContent("-2"); 
});
