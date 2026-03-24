import type { ReactNode } from "react";

import { BaseDialog } from "@/components/shared/base-ui";
import { CloseIcon } from "@/components/shared/icons";
import { Button } from "@/components/button";
import {
  accentBlock,
  backdrop,
  body,
  closeButton,
  description,
  footer,
  header,
  popup,
  title,
  titleRow,
  viewport,
} from "@/components/shared/dialog.css";

export type DialogProps = {
  bodyText?: string;
  children?: ReactNode;
  defaultOpen?: boolean;
  footerActions?: ReactNode;
  onOpenChange?: (open: boolean) => void;
  title: string;
  triggerLabel: string;
};

export function Dialog({
  bodyText,
  children,
  defaultOpen,
  footerActions,
  onOpenChange,
  title: heading,
  triggerLabel,
}: DialogProps) {
  return (
    <BaseDialog.Root defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      <BaseDialog.Trigger render={<Button variant="secondary" />}>{triggerLabel}</BaseDialog.Trigger>
      <BaseDialog.Portal>
        <BaseDialog.Backdrop className={backdrop} />
        <BaseDialog.Viewport className={viewport}>
          <BaseDialog.Popup className={popup}>
            <div className={header}>
              <div className={titleRow}>
                <BaseDialog.Title className={title}>{heading}</BaseDialog.Title>
                <BaseDialog.Close className={closeButton} aria-label="닫기">
                  <CloseIcon style={{ width: 16, height: 16 }} />
                </BaseDialog.Close>
              </div>
              {bodyText ? <BaseDialog.Description className={description}>{bodyText}</BaseDialog.Description> : null}
            </div>

            <div className={body}>
              {children ? children : <div className={accentBlock}>핵심 설정과 주의사항을 빠르게 확인할 수 있는 조용한 모달 패턴입니다.</div>}
            </div>

            <div className={footer}>
              {footerActions ? (
                footerActions
              ) : (
                <>
                  <BaseDialog.Close render={<Button variant="ghost" />}>취소</BaseDialog.Close>
                  <BaseDialog.Close render={<Button />}>확인</BaseDialog.Close>
                </>
              )}
            </div>
          </BaseDialog.Popup>
        </BaseDialog.Viewport>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
}
