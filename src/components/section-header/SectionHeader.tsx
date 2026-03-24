import type { ElementType, ReactNode } from "react";

import { cx } from "@/components/shared/cx";

import {
  sectionHeaderDescription,
  sectionHeaderRoot,
  sectionHeaderTitle,
  sectionHeaderTop,
} from "./SectionHeader.css";

type SectionHeaderProps = {
  actions?: ReactNode;
  className?: string;
  description?: ReactNode;
  title: ReactNode;
  titleAs?: ElementType;
};

export function SectionHeader({
  actions,
  className,
  description,
  title,
  titleAs: Title = "h2",
}: SectionHeaderProps) {
  return (
    <div className={cx(sectionHeaderRoot, className)}>
      <div className={sectionHeaderTop}>
        <Title className={sectionHeaderTitle}>{title}</Title>
        {actions}
      </div>
      {description ? <p className={sectionHeaderDescription}>{description}</p> : null}
    </div>
  );
}
