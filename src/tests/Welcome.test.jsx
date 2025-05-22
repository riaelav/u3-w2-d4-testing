import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("Welcome", () => {
  it("renders the Welcome component", () => {
    render(<Welcome />);

    const title = screen.getByText("Benvenuti in EpiBooks!");
    expect(title).toBeInTheDocument();

    screen.debug(); // prints out the jsx in the App component unto the command line
  });
});
