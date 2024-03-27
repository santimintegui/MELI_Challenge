import { render } from "@testing-library/react";
import { screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Banner from "../Banner";

const mockedUseNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const mod = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...mod,
    useNavigate: () => mockedUseNavigate,
    useLocation: (value: string) => ({ search: value || "" }),
  };
});

describe("Banner component", () => {
  test("renders correctly", () => {
    render(<Banner />);
  });

  test("goHome function", () => {
    render(<Banner />);
    const meliLogo = screen.getByAltText("Mercado Libre Logo");
    meliLogo.click();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/");
  });

  test("submit form with correct value", () => {
    render(<Banner />);
    const inputElement = screen.getByPlaceholderText("Nunca deje de buscar");
    inputElement.focus();
    fireEvent.change(inputElement, { target: { value: "test" } });
    fireEvent.submit(inputElement);
    expect(mockedUseNavigate).toHaveBeenCalledWith("/items?search=test");
  });
});
