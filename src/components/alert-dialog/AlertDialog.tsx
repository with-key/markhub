import type { ReactNode } from "react";

import { AlertDialog as BaseAlertDialog } from "@/components/shared/base-ui";
import { CloseIcon } from "@/components/shared/icons";
import { Button } from "@/components/button";
import {
  accentBlock,
  backdrop,
  body,
  closeButton,
  dangerPopup,
  description,
  footer,
  header,
  popup,
  title,
  titleRow,
  viewport,
} from "@/components/shared/dialog.css";

export type AlertDialogProps = {
  bodyText: string;
  cancelLabel?: string;
  children?: ReactNode;
  confirmLabel?: string;
  onConfirm?: () => void;
  title: string;
  triggerLabel: string;
};

export function AlertDialog({
  bodyText,
  cancelLabel = "돌아가기",
  children,
  confirmLabel = "계속 진행",
  onConfirm,
  title: heading,
  triggerLabel,
}: AlertDialogProps) {
  return (
    <BaseAlertDialog.Root>
      <BaseAlertDialog.Trigger render={<Button variant="ghost" />}>{triggerLabel}</BaseAlertDialog.Trigger>
      <BaseAlertDialog.Portal>
        <BaseAlertDialog.Backdrop className={backdrop} />
        <BaseAlertDialog.Viewport className={viewport}>
          <BaseAlertDialog.Popup className={`${popup} ${dangerPopup}`}>
            <div className={header}>
              <div className={titleRow}>
                <BaseAlertDialog.Title className={title}>{heading}</BaseAlertDialog.Title>
                <BaseAlertDialog.Close className={closeButton} aria-label="닫기">
                  <CloseIcon style={{ width: 16, height: 16 }} />
                </BaseAlertDialog.Close>
              </div>
              <BaseAlertDialog.Description className={description}>{bodyText}</BaseAlertDialog.Description>
            </div>

            <div className={body}>
              {children ? children : <div className={accentBlock}>되돌리기 어려운 작업에는 한 번 더 맥락을 보여주는 것이 안전합니다.</div>}
            </div>

            <div className={footer}>
              <BaseAlertDialog.Close render={<Button variant="ghost" />}>{cancelLabel}</BaseAlertDialog.Close>
              <BaseAlertDialog.Close render={<Button variant="danger" />} onClick={onConfirm}>
                {confirmLabel}
              </BaseAlertDialog.Close>
            </div>
          </BaseAlertDialog.Popup>
        </BaseAlertDialog.Viewport>
      </BaseAlertDialog.Portal>
    </BaseAlertDialog.Root>
  );
}
