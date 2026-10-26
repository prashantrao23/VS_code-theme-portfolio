import { useEffect, useState } from "react";

interface IndexGutterProps {
  contentElement: HTMLElement | null;
  lineHeight?: number;
}

export default function IndexGutter({
  contentElement,
  lineHeight = 24,
}: IndexGutterProps) {
  const [lineCount, setLineCount] = useState(1);

  useEffect(() => {
    if (!contentElement) {
      setLineCount(1);
      return;
    }

    const updateLineCount = () => {
      const height = contentElement.scrollHeight;
      const nextCount = Math.max(1, Math.ceil(height / lineHeight));

      setLineCount((previous) =>
        previous === nextCount ? previous : nextCount
      );
    };

    updateLineCount();

    const observer = new ResizeObserver(updateLineCount);
    observer.observe(contentElement);

    return () => observer.disconnect();
  }, [contentElement, lineHeight]);

  return (
    <div
      className="shrink-0 select-none pr-3 text-right text-gray-400"
      style={{
        lineHeight: `${lineHeight}px`,
      }}
      aria-hidden="true"
    >
      {Array.from({ length: lineCount }, (_, index) => (
        <div key={index}>{index + 1}</div>
      ))}
    </div>
  );
}