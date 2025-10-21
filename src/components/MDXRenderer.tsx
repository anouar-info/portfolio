// src/components/MDXRenderer.tsx
"use client";

import React, { useEffect, useState } from "react";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import "katex/dist/katex.min.css";
interface MDXRendererProps {
  compiledSource: string;
}

const MDXRenderer: React.FC<MDXRendererProps> = ({ compiledSource }) => {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && compiledSource) {
      try {
        // Clean up the compiled source if necessary
        const cleanedSource = compiledSource
          .replace(/\*createMdxContent/g, "_createMdxContent")
          .replace(/\*\*/g, "*");

        // Create a function from the string.
        // The function expects an object with { jsx }.
        const evalFunction = new Function(
          "React",
          `
          const { jsx } = React;
          ${cleanedSource}
          return jsx;
        `
        );

        // Pass in the JSX runtime object instead of React.
        const evaluatedResult = evalFunction({ jsx, jsxs, Fragment });

        // If evaluatedResult is an object with a default property, use that.
        const MDXExport =
          evaluatedResult &&
          typeof evaluatedResult === "object" &&
          "default" in evaluatedResult
            ? evaluatedResult.default
            : evaluatedResult;

        // Create a component that calls MDXExport as a function.
        const MDXComponent: React.FC = () => {
          try {
            // Call MDXExport with an empty components prop (adjust as needed)
            const renderedContent = MDXExport({ components: {} });
            return <div className="mdx-content">{renderedContent}</div>;
          } catch (err) {
            console.error("Error rendering MDX:", err);
            return (
              <div className="text-red-500">
                Error rendering content. Please check the console for details.
              </div>
            );
          }
        };
        MDXComponent.displayName = "MDXComponent";
        setComponent(() => MDXComponent);
      } catch (error) {
        console.error("Error parsing MDX:", error);
        const ErrorComponent: React.FC = () => (
          <div className="text-red-500">
            Error parsing content. Please check the console for details.
          </div>
        );
        ErrorComponent.displayName = "MDXErrorComponent";
        setComponent(() => ErrorComponent);
      }
    }
  }, [compiledSource]);

  if (!Component) {
    return <div>Loading content...</div>;
  }

  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <Component />
    </article>
  );
};

export default MDXRenderer;
