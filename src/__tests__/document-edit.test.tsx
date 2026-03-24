import { render, screen } from "@testing-library/react";

import { DocumentEditPage } from "../pages/projects/[projectId]/docs/[docId]/edit";

describe("Document edit page", () => {
  it("renders split view editor and preview", () => {
    render(<DocumentEditPage projectId="aurora-hq" docId="doc-editor-spec" />);

    expect(screen.getByText("Markdown Editor")).toBeInTheDocument();
    expect(screen.getByText("Live Preview")).toBeInTheDocument();
    expect(screen.getByLabelText("문서 제목")).toHaveValue("문서 편집기 스펙");
    expect(screen.getByLabelText("문서 본문")).toBeInTheDocument();
  });
});
