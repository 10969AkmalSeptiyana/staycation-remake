import { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputDate from "../index";

function TestInput() {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleChange = (e) => {
    setValue({ value: e.target.value });
  };

  return (
    <InputDate max={30} onChange={handleChange} name="value" value={value} />
  );
}

const setup = () => {
  render(<TestInput />);
  const wrapper = screen.getByTestId("input-date");
  const input = screen.getByLabelText("date");

  return { wrapper, input };
};

describe("InputDate", () => {
  it("Should have wrapper with className .form-control", () => {
    const { wrapper } = setup();

    expect(wrapper).toBeInTheDocument();
  });

  it("Should have tag <input> and has className .form-control", () => {
    const { input } = setup();

    expect(input).toBeInTheDocument();
  });

  it("Should show date picker when click input field", () => {
    const { input } = setup();

    fireEvent.click(input, { button: 1 });
    const datePickerWrapper = screen.getByTestId("date-range-wrapper");

    expect(datePickerWrapper).toBeInTheDocument();
  });
});
