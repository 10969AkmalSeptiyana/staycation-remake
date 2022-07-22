import { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputNumber from "../index";

function TestInput() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <InputNumber max={30} onChange={handleChange} name="value" value={value} />
  );
}

const setup = () => {
  render(<TestInput />);
  const inputElement = screen.getByLabelText("Number");

  return { inputElement };
};

describe("InputNumber Component", () => {
  it("Should able to change value", () => {
    const { inputElement } = setup();

    fireEvent.change(inputElement, { target: { value: 23 } });
    expect(inputElement.value).toBe("23");
  });

  it("Should not be able to change when reach max value", () => {
    const { inputElement } = setup();

    fireEvent.change(inputElement, { target: { value: 33 } });
    expect(inputElement.value).toBe("");
  });
});
