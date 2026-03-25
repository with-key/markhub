import type { ReactNode } from "react";
import { prose } from "@/styles/app.css";

type MarkdownPreviewProps = {
  content: string;
};

export function MarkdownPreview({ content }: MarkdownPreviewProps) {
  const lines = content.split("\n");
  const elements: ReactNode[] = [];
  let listItems: string[] = [];
  let orderedItems: string[] = [];

  const flushUnordered = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`}>
          {listItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>,
      );
      listItems = [];
    }
  };

  const flushOrdered = () => {
    if (orderedItems.length > 0) {
      elements.push(
        <ol key={`ol-${elements.length}`}>
          {orderedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>,
      );
      orderedItems = [];
    }
  };

  lines.forEach((line, index) => {
    if (!line.trim()) {
      flushUnordered();
      flushOrdered();
      return;
    }

    if (line.startsWith("- ")) {
      flushOrdered();
      listItems.push(line.slice(2));
      return;
    }

    if (/^\d+\.\s/.test(line)) {
      flushUnordered();
      orderedItems.push(line.replace(/^\d+\.\s/, ""));
      return;
    }

    flushUnordered();
    flushOrdered();

    if (line.startsWith("### ")) {
      elements.push(<h3 key={`h3-${index}`}>{line.slice(4)}</h3>);
      return;
    }

    if (line.startsWith("## ")) {
      elements.push(<h2 key={`h2-${index}`}>{line.slice(3)}</h2>);
      return;
    }

    if (line.startsWith("# ")) {
      elements.push(<h1 key={`h1-${index}`}>{line.slice(2)}</h1>);
      return;
    }

    elements.push(<p key={`p-${index}`}>{line}</p>);
  });

  flushUnordered();
  flushOrdered();

  return <div className={prose}>{elements}</div>;
}
