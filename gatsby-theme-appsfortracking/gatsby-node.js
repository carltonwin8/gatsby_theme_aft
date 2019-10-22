const fs = require("fs");
const path = require("path");

const mkdirp = require("mkdirp");

let contentPath;

exports.onPreBootstrap = ({ store }, options) => {
  const { program } = store.getState();
  contentPath = options.contentPath || "docs";
  const dir = path.join(program.directory, contentPath);
  if (!fs.existsSync(dir)) mkdirp(dir);
};

let noNode = true;
exports.onCreateNode = ({ node, actions }, options) => {
  if (node.internal.type !== "File") return;
  noNode = false;
  const toMdxPath = node => {
    const { dir } = path.parse(node.relativePath);
    const basePath = options.basePath || "/";
    const name = node.name === "index" ? "" : node.name;
    return path.join(basePath, dir, name);
  };
  const slug = toMdxPath(node);
  actions.createNodeField({ node, name: "slug", value: slug });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  if (noNode)
    return reporter.panic(
      `Error no apps for tracking mdx file were found in ${contentPath}/`
    );
  const result = await graphql(`
    query {
      allFile {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);
  if (result.errors)
    reporter.panic("Error loading apps for tracking mdx file", result.errors);
  result.data.allFile.nodes.forEach(node => {
    actions.createPage({
      path: node.fields.slug,
      component: require.resolve("./src/templates/layout.js"),
      context: { slug: node.fields.slug }
    });
  });
};
