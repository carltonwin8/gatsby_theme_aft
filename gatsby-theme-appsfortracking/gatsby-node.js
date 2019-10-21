const fs = require("fs");
const path = require("path");

const mkdirp = require("mkdirp");

exports.onPreBootstrap = ({ store }, options) => {
  const { program } = store.getState();
  const contentPath = options.contentPath || "docs";
  const dir = path.join(program.directory, contentPath);
  if (!fs.existsSync(dir)) mkdirp(dir);
};

exports.onCreateNode = ({ node, actions }, options) => {
  if (node.internal.type !== "File") return;
  const toMdxPath = node => {
    const { dir } = path.parse(node.relativePath);
    const basePath = options.basePath || "/";
    return path.join(basePath, dir, node.name);
  };
  const slug = toMdxPath(node);
  actions.createNodeField({ node, name: "slug", value: slug });
};

exports.createPages = async ({ actions, graphql, reporter }, options) => {
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
