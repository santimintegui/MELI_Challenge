import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import Card from "../Card";
import { Item } from "../../../types/Item";

describe("Card component", () => {
  const mockItem: Item = {
    id: "1",
    price: {
      amount: "99.99",
      decimals: "00",
    },
    title: "Sample Item",
    free_shipping: true,
    picture: "sample_picture.jpg",
    location: "Sample Location",
  };

  test("renders item details correctly", () => {
    render(<Card item={mockItem} isLast={false} />);

    const priceElement = screen.getByText("99.99");
    const titleElement = screen.getByText("Sample Item");
    const shippingLogo = screen.getByAltText("free-shipping-logo");
    const locationElement = screen.getByText("Sample Location");

    expect(priceElement);
    expect(titleElement);
    expect(shippingLogo);
    expect(locationElement);
  });

  test("renders correctly when isLast is true", () => {
    render(<Card item={mockItem} isLast={true} />);
    expect(screen.getByTestId("card-container last"));
  });

  test("renders correctly when isLast is false", () => {
    render(<Card item={mockItem} isLast={false} />);
    expect(screen.getByTestId("card-container"));
  });
});
