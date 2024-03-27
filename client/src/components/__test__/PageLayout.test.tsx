import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import PageLayout from "../PageLayout";

describe("PageLayout component", () => {
  test("renders loading spinner when isLoading is true", () => {
    render(
      <PageLayout
        isLoading={true}
        error={false}
        showChildren={true}
        breadcumb={[]}
      >
        Children content
      </PageLayout>
    );
    expect(screen.getByTestId("spinner")).toBeTruthy();
  });

  test("renders children content when isLoading is false and showChildren is true", () => {
    render(
      <PageLayout
        isLoading={false}
        error={false}
        showChildren={true}
        breadcumb={[]}
      >
        Children content
      </PageLayout>
    );
    expect(screen.queryByTestId("Children content")).toBeFalsy();
  });

  test("renders NotFoundResults component when error is true", () => {
    render(
      <PageLayout
        isLoading={false}
        error={true}
        showChildren={true}
        breadcumb={[]}
      >
        Children content
      </PageLayout>
    );
    expect(screen.getByText("No se encontraron resultados...")).toBeTruthy();
  });
});
