import { render, screen } from "@testing-library/react";

import Login from "../pages/login";

describe("Login", () => {
  it("renders the social login actions", () => {
    render(<Login />);

    expect(
      screen.getByRole("heading", {
        name: "소셜 계정으로 시작",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Continue with GitHub",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Continue with Google",
      }),
    ).toBeInTheDocument();
  });
});
