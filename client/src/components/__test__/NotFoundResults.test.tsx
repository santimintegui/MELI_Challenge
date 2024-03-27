import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import NotFoundResults from "../NotFoundResults";

describe("NotFoundResults component", () => {
  test("renders correctly", () => {
    render(<NotFoundResults />);
    expect(screen.getByText("No se encontraron resultados...")).toBeTruthy();
  });
});
