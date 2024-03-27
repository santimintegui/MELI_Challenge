import { expect, test, describe, vi } from "vitest";
import Input from "../Input";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Input component", () => {
  test("renders correctly", () => {
    render(<Input value="" handleChange={() => {}} />);
  });

  test("render input with search button and placeholder", () => {
    render(<Input value="" handleChange={() => {}} />);
    expect(screen.getByPlaceholderText("Nunca deje de buscar"));
    expect(screen.getByRole("button"));
  });

  test("render input and show correctly value", () => {
    render(<Input value="test" handleChange={() => {}} />);
    expect(screen.getByDisplayValue("test"));
  });

  test.only("render input and changes value correctly", () => {
    const handleChange = vi.fn();

    render(<Input value="" handleChange={handleChange} />);

    const inputElement = screen.getByPlaceholderText("Nunca deje de buscar");

    inputElement.focus();
    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(handleChange).toHaveBeenCalled();
  });
});
