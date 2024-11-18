// import necessary react testing library helpers here
// import the Counter component here

beforeEach(() => {
  // Render the Counter component here
})


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

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
});
