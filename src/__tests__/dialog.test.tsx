import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Dialog } from "@/components";

describe("Dialog compound API", () => {
  it("opens and closes through trigger and close actions", async () => {
    const user = userEvent.setup();

    render(
      <Dialog.Root>
        <Dialog.Trigger render={<button type="button">Open Dialog</button>} />
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Viewport>
            <Dialog.Popup>
              <Dialog.Title>리뷰 세션 시작</Dialog.Title>
              <Dialog.Description>기획 리뷰 세션을 엽니다.</Dialog.Description>
              <Dialog.Close render={<button type="button">닫기</button>} />
            </Dialog.Popup>
          </Dialog.Viewport>
        </Dialog.Portal>
      </Dialog.Root>,
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Open Dialog" }));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "리뷰 세션 시작" })).toBeInTheDocument();
    expect(screen.getByText("기획 리뷰 세션을 엽니다.")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "닫기" }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("supports defaultOpen and reports open changes from Root", async () => {
    const user = userEvent.setup();
    const handleOpenChange = jest.fn();

    render(
      <Dialog.Root defaultOpen onOpenChange={handleOpenChange}>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Viewport>
            <Dialog.Popup>
              <Dialog.Title>기본으로 열린 다이얼로그</Dialog.Title>
              <Dialog.Close render={<button type="button">닫기</button>} />
            </Dialog.Popup>
          </Dialog.Viewport>
        </Dialog.Portal>
      </Dialog.Root>,
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "기본으로 열린 다이얼로그" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "닫기" }));

    expect(handleOpenChange).toHaveBeenCalledWith(
      false,
      expect.objectContaining({
        reason: "close-press",
      }),
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
