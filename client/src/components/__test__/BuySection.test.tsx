import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import BuySection from "../BuySection";

describe("BuySection component", () => {
  const title = "Sample Title";
  const price = { amount: "99", decimals: "99" };
  const sold_quantity = 100;
  const condition = "new";

  test("renders correctly and show information correct", () => {
    render(
      <BuySection
        title={title}
        price={price}
        sold_quantity={sold_quantity}
        condition={condition}
      />
    );
    expect(screen.getByText(title)).toBeTruthy();
    expect(screen.getByText(`$ ${price.amount}`)).toBeTruthy();
    expect(screen.getByText(price.decimals)).toBeTruthy();
    expect(screen.getByText(`Nuevo - ${sold_quantity} vendidos`)).toBeTruthy();
  });
});
