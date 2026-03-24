import { render, screen } from "@testing-library/react";

import Login from "../pages/login";

describe("Login", () => {
  it("renders the login form and social actions", () => {
    render(<Login />);

    expect(
      screen.getByRole("heading", {
        name: "Welcome back",
      }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Email Address")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Sign In",
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
