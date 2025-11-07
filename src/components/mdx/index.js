/**
 * MDX Components Wrapper
 * Central export for all MDX-specific components
 */

import { CodeBlock } from './CodeBlock';
import { Callout } from './Callout';
import { MDXImage } from './MDXImage';

export { CodeBlock };
export { Callout };
export { MDXImage };

export const mdxComponents = {
  CodeBlock,
  Callout,
  Image: MDXImage,
};

export default mdxComponents;
