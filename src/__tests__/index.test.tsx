import { render, screen } from "@testing-library/react";

import Home from "../pages/index";

describe("Home", () => {
  it("renders owned and joined project sections", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: "내가 생성했거나 참여 중인 프로젝트",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "내가 생성한 프로젝트" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "참여 중인 프로젝트" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Aurora HQ" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Pulse Mobile" })).toBeInTheDocument();
  });
});
