import { render, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText(/5 birthdays today/i)).toBeInTheDocument();
});

test('Clears birthday list', () => {
    const { getByText, getByRole } = render(<App />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(getByText(/0 birthdays today/i)).toBeInTheDocument();
})