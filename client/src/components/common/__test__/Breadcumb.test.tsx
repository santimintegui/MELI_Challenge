import { expect, test } from "vitest";
import Breadcumb from "../Breadcumb";
import { render, screen } from "@testing-library/react";

test("renders without crashing", () => {
  const props = {
    items: ["Home", "Products", "Shoes"],
  };
  render(<Breadcumb {...props} />);
  expect(screen).toBeDefined();
});

test("renders items correctly", () => {
  const props = {
    items: ["Home", "Products", "Shoes"],
  };
  render(<Breadcumb {...props} />);
  expect(screen.getByText("Home"));
  expect(screen.getByText("Products"));
  expect(screen.getByText("Shoes"));
});
