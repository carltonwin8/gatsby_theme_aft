module.exports = options => ({
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: { path: options.contentPath || "docs" }
    },
    { resolve: "gatsby-plugin-mdx", options: {} }
  ]
});
