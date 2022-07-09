import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "../index";

const MockButton = () => {
  return (
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );
};

describe("Button", () => {
  it("Should not allowed click button if isDisabled is present", () => {
    render(<Button isDisabled />);
    const spanElement = screen.getByTestId("span");
    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveClass("disabled");
  });

  it("Should render loading/spinner", () => {
    render(<Button isLoading />);
    const spanElement = screen.getByTestId("span");
    const buttonElement = screen.getByText(/Loading/i);
    expect(spanElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("Should render <Link> component", () => {
    render(<MockButton />);
    const anchorElement = screen.getByRole("link");
    expect(anchorElement).toBeInTheDocument();
  });
});
