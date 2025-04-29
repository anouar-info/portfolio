// src/components/MDXContent.tsx
import * as runtime from "react/jsx-runtime";

// Add global short-codes here if you have any
const sharedComponents = {};

export interface MDXProps {
  code: string;                               // string from Velite
  components?: Record<string, React.ComponentType>;
}

export const MDXContent = ({ code, components }: MDXProps) => {
  // this never leaves the server bundle
  const fn = new Function(code);
  const Component = fn({ ...runtime }).default;
  return <Component components={{ ...sharedComponents, ...components }} />;
};
