import { render, screen } from "@testing-library/react";

import Home from "../pages/index";

describe("Home", () => {
  it("renders the starter heading", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: "Pages Router, TypeScript, pnpm, TanStack Query",
      }),
    ).toBeInTheDocument();
  });
});
