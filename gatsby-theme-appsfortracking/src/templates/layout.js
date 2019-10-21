import React from "react";
import { graphql } from "gatsby";
import MdxContent from "../components/mdx-content";

export const query = graphql`
  query($slug: String!) {
    file(fields: { slug: { eq: $slug } }) {
      childMdx {
        body
      }
    }
  }
`;

const Layout = props => {
  return (
    <>
      <MdxContent {...props.data.file.childMdx} />
    </>
  );
};

export default Layout;
