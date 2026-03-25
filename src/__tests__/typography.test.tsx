import { render, screen } from "@testing-library/react";

import { Typography } from "@/components";

describe("Typography", () => {
  it("renders the default semantic tag for the variant", () => {
    render(<Typography variant="heading02">프로젝트 개요</Typography>);

    const element = screen.getByRole("heading", { level: 2, name: "프로젝트 개요" });

    expect(element.tagName).toBe("H2");
  });

  it("supports polymorphism through render", () => {
    render(
      <Typography render={<span data-testid="typography" />} variant="heading02">
        프로젝트 개요
      </Typography>,
    );

    const element = screen.getByTestId("typography");

    expect(element.tagName).toBe("SPAN");
    expect(element).toHaveTextContent("프로젝트 개요");
  });

  it("accepts helper props and merges custom class names", () => {
    render(
      <Typography
        align="center"
        balance
        className="custom-class"
        display="block"
        m={4}
        tone="muted"
        truncate
        variant="body01"
      >
        정렬과 헬퍼 클래스 확인
      </Typography>,
    );

    const element = screen.getByText("정렬과 헬퍼 클래스 확인");

    expect(element).toHaveClass("custom-class");
  });
});
