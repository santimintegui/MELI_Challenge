import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import ListItems from "../ListItems";

describe("ListItems component", () => {
  const mockItems = [
    {
      id: "1",
      title: "Item 1",
      price: { amount: "10", decimals: "00" },
      picture: "item1.jpg",
      free_shipping: false,
    },
    {
      id: "2",
      title: "Item 2",
      price: { amount: "20", decimals: "00" },
      picture: "item2.jpg",
      free_shipping: true,
    },
    {
      id: "3",
      title: "Item 3",
      price: { amount: "30", decimals: "00" },
      picture: "item3.jpg",
      free_shipping: false,
    },
  ];

  test("renders correctly with provided items", () => {
    render(<ListItems items={mockItems} showInfo={() => {}} />);

    mockItems.forEach((item) => {
      expect(screen.findByText(item.title));
    });
  });
});
