import { render, screen } from "@testing-library/react";

import { ProjectDashboard } from "../pages/projects/[projectId]";

describe("Project dashboard", () => {
  it("renders project metrics and project-scoped search", () => {
    render(<ProjectDashboard projectId="aurora-hq" />);

    expect(
      screen.getByRole("heading", {
        name: "Aurora HQ 워크스페이스",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("프로젝트 내부 검색")).toBeInTheDocument();
    expect(screen.getByLabelText("프로젝트 내부 검색")).toBeInTheDocument();
    expect(screen.getByText("최근 업데이트")).toBeInTheDocument();
    expect(screen.getByText("진행 중 태스크")).toBeInTheDocument();
    expect(screen.getByText("최근 문서")).toBeInTheDocument();
  });
});
