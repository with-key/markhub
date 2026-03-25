import type { ComponentProps } from "react";

import { AlertDialog as BaseAlertDialog } from "@/components/shared/base-ui";
import { cx } from "@/components/shared/cx";
import {
  backdrop,
  description,
  popup,
  title,
  viewport,
} from "@/components/shared/dialog.css";

type AlertDialogRootProps = BaseAlertDialog.Root.Props;
type AlertDialogTriggerProps = BaseAlertDialog.Trigger.Props;
type AlertDialogPortalProps = BaseAlertDialog.Portal.Props;
type AlertDialogBackdropProps = BaseAlertDialog.Backdrop.Props;
type AlertDialogViewportProps = BaseAlertDialog.Viewport.Props;
type AlertDialogPopupProps = BaseAlertDialog.Popup.Props;
type AlertDialogTitleProps = BaseAlertDialog.Title.Props;
type AlertDialogDescriptionProps = BaseAlertDialog.Description.Props;
type AlertDialogCloseProps = BaseAlertDialog.Close.Props;

function mergeClassName<State>(
  defaultClassName: string,
  className?: string | ((state: State) => string | undefined),
) {
  if (typeof className === "function") {
    return (state: State) => cx(defaultClassName, className(state));
  }

  return cx(defaultClassName, className);
}

function Root(props: AlertDialogRootProps) {
  return <BaseAlertDialog.Root {...props} />;
}

const Trigger = BaseAlertDialog.Trigger;

function Portal({ ref, ...props }: ComponentProps<typeof BaseAlertDialog.Portal>) {
  return <BaseAlertDialog.Portal ref={ref} {...props} />;
}

function Backdrop({ className, ref, ...props }: ComponentProps<typeof BaseAlertDialog.Backdrop>) {
  return <BaseAlertDialog.Backdrop ref={ref} className={mergeClassName(backdrop, className)} {...props} />;
}

function Viewport({ className, ref, ...props }: ComponentProps<typeof BaseAlertDialog.Viewport>) {
  return <BaseAlertDialog.Viewport ref={ref} className={mergeClassName(viewport, className)} {...props} />;
}

function Popup({ className, ref, ...props }: ComponentProps<typeof BaseAlertDialog.Popup>) {
  return <BaseAlertDialog.Popup ref={ref} className={mergeClassName(popup, className)} {...props} />;
}

function Title({ className, ref, ...props }: ComponentProps<typeof BaseAlertDialog.Title>) {
  return <BaseAlertDialog.Title ref={ref} className={mergeClassName(title, className)} {...props} />;
}

function Description({ className, ref, ...props }: ComponentProps<typeof BaseAlertDialog.Description>) {
  return <BaseAlertDialog.Description ref={ref} className={mergeClassName(description, className)} {...props} />;
}

function Close({ ref, ...props }: ComponentProps<typeof BaseAlertDialog.Close>) {
  return <BaseAlertDialog.Close ref={ref} {...props} />;
}

export const AlertDialog = {
  Root,
  Trigger,
  Portal,
  Backdrop,
  Viewport,
  Popup,
  Title,
  Description,
  Close,
};

export type {
  AlertDialogBackdropProps,
  AlertDialogCloseProps,
  AlertDialogDescriptionProps,
  AlertDialogPopupProps,
  AlertDialogPortalProps,
  AlertDialogRootProps,
  AlertDialogTitleProps,
  AlertDialogTriggerProps,
  AlertDialogViewportProps,
};
