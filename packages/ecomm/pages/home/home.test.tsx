import { render, screen } from "@testing-library/react";
import { Home } from "./index";
import { sum } from "./util";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "Welcome to next js",
    });

    expect(heading).toBeInTheDocument();
  });

  it("add a sum", () => {
    const result = sum(4, 5);
    expect(result).toBe(9);
  });
});
