import { MDXRemote } from "next-mdx-remote/rsc";

import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";

export default function MarkdownWrapper(props) {
  return (
    <MDXProvider>
      <main {...props} />
    </MDXProvider>
  );
}
