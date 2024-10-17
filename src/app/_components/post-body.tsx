"use client";

import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/dark.css"; // You can switch to another theme if you prefer
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  useEffect(() => {
    // Initialize highlight.js on all <pre><code> elements after the DOM is ready
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach((block) => {
      // Cast block to HTMLElement before passing it to highlight.js
      hljs.highlightElement(block as HTMLElement);
    });
  }, [content]);

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }} // Render markdown content as HTML
      />
    </div>
  );
}
