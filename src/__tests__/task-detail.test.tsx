import { render, screen } from "@testing-library/react";

import { TaskDetailPage } from "../pages/projects/[projectId]/tasks/[taskId]";

describe("Task detail page", () => {
  it("renders related document sections scoped to the current project", () => {
    render(<TaskDetailPage projectId="aurora-hq" taskId="task-project-create" />);

    expect(screen.getByText("연결된 문서")).toBeInTheDocument();
    expect(screen.getByText("관련 문서 추가")).toBeInTheDocument();
    expect(screen.getByText("프로젝트 생성 플로우")).toBeInTheDocument();
    expect(screen.getByText("문서 편집기 스펙")).toBeInTheDocument();
    expect(screen.queryByText("출시 QA 체크리스트")).not.toBeInTheDocument();
  });
});
