import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import ItemInfo from "../ItemInfo";

describe("ItemInfo component", () => {
  const mockItem = {
    id: "1",
    picture: "sample_picture.jpg",
    description: "Sample description",
    price: { amount: "99", decimals: "00" },
    condition: "new",
    sold_quantity: 100,
    title: "Sample Title",
    free_shipping: true,
  };

  test("renders correctly with provided item data", () => {
    render(<ItemInfo item={mockItem} />);

    expect(screen.getByText(mockItem.title)).toBeTruthy();
    expect(screen.getByText(mockItem.description)).toBeTruthy();
    expect(screen.getByText(`$ ${mockItem.price.amount}`)).toBeTruthy();
    expect(screen.getByText(mockItem.price.decimals)).toBeTruthy();
    expect(
      screen.getByText(`Nuevo - ${mockItem.sold_quantity} vendidos`)
    ).toBeTruthy();
    expect(screen.getByText("Descripcion del producto")).toBeTruthy();
    expect(screen.getByText("Sample description")).toBeTruthy();
  });

  test("renders default description when description is not provided", () => {
    const itemWithoutDescription = { ...mockItem, description: "" };
    render(<ItemInfo item={itemWithoutDescription} />);
    expect(screen.getByText("No contiene descripcion")).toBeTruthy();
  });
});
