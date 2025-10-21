// types/remark-attr.d.ts
declare module 'remark-attr' {
  import type { Plugin } from 'unified';

  // Type it permissively so any options (like { inline: true }) are accepted.
  type RemarkAttrOptions = Record<string, unknown>;

  const remarkAttr: Plugin<[RemarkAttrOptions?]>;
  export default remarkAttr;
}
