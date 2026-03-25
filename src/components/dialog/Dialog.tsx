import type { ComponentProps } from "react";
import { BaseDialog } from "@/components/shared/base-ui";
import { cx } from "@/components/shared/cx";
import {
  backdrop,
  description,
  popup,
  title,
  viewport,
} from "@/components/shared/dialog.css";

type DialogRootProps = BaseDialog.Root.Props;
type DialogTriggerProps = BaseDialog.Trigger.Props;
type DialogPortalProps = BaseDialog.Portal.Props;
type DialogBackdropProps = BaseDialog.Backdrop.Props;
type DialogViewportProps = BaseDialog.Viewport.Props;
type DialogPopupProps = BaseDialog.Popup.Props;
type DialogTitleProps = BaseDialog.Title.Props;
type DialogDescriptionProps = BaseDialog.Description.Props;
type DialogCloseProps = BaseDialog.Close.Props;

function mergeClassName<State>(
  defaultClassName: string,
  className?: string | ((state: State) => string | undefined),
) {
  if (typeof className === "function") {
    return (state: State) => cx(defaultClassName, className(state));
  }

  return cx(defaultClassName, className);
}

function Root(props: DialogRootProps) {
  return <BaseDialog.Root {...props} />;
}

const Trigger = BaseDialog.Trigger;

function Portal({ ref, ...props }: ComponentProps<typeof BaseDialog.Portal>) {
  return <BaseDialog.Portal ref={ref} {...props} />;
}

function Backdrop({ className, ref, ...props }: ComponentProps<typeof BaseDialog.Backdrop>) {
  return <BaseDialog.Backdrop ref={ref} className={mergeClassName(backdrop, className)} {...props} />;
}

function Viewport({ className, ref, ...props }: ComponentProps<typeof BaseDialog.Viewport>) {
  return <BaseDialog.Viewport ref={ref} className={mergeClassName(viewport, className)} {...props} />;
}

function Popup({ className, ref, ...props }: ComponentProps<typeof BaseDialog.Popup>) {
  return <BaseDialog.Popup ref={ref} className={mergeClassName(popup, className)} {...props} />;
}

function Title({ className, ref, ...props }: ComponentProps<typeof BaseDialog.Title>) {
  return <BaseDialog.Title ref={ref} className={mergeClassName(title, className)} {...props} />;
}

function Description({ className, ref, ...props }: ComponentProps<typeof BaseDialog.Description>) {
  return <BaseDialog.Description ref={ref} className={mergeClassName(description, className)} {...props} />;
}

function Close({ ref, ...props }: ComponentProps<typeof BaseDialog.Close>) {
  return <BaseDialog.Close ref={ref} {...props} />;
}

export  {
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
  DialogBackdropProps,
  DialogCloseProps,
  DialogDescriptionProps,
  DialogPopupProps,
  DialogPortalProps,
  DialogRootProps,
  DialogTitleProps,
  DialogTriggerProps,
  DialogViewportProps,
};
