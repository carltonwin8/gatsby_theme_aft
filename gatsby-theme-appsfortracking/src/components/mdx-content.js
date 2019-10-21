import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

const MdxContent = ({ body }) => <MDXRenderer>{body}</MDXRenderer>;

export default MdxContent;
