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
  console.log(props);

  return props.data && props.data.file && props.data.file.childMdx ? (
    <MdxContent {...props.data.file.childMdx} />
  ) : (
    <div>
      <h1>Error</h1>
    </div>
  );
};

export default Layout;
