# Apps For Tracking Documentation Theme

## Usage

- Install via `npm i gatsby-theme-appsfortracking`.
- Create `docs` folder with `mdx` files with `index.mdx` being used for `/`.
- Create the following `gatsby-config.js` in the root directory.

```js
module.exports = {
  plugins: [{ resolve: "gatsby-theme-appsfortracking", options: {} }],
  pathPrefix: "<name_of_git_repo_for_doc>"
};
```

Valid options for the `options` object noted above are:

- contentPath - `docs` is the content path default location
- basePath - `/` is the base path default location

### Github Pages

- run `npm add --save-dev gh-pages` at a CLI
- add `pathPrefix: "activitytracker"` to `gstsby-config.js`
- add `"ghpages": "gh-pages -d public"` to `"scripts"` in `package.json`
- use `npm run ghpages` to publish to Github Pages

## Notes

- This repository holds the theme used to write the documentation for the
  applications released by
  [Apps For Tracking](https://appsfortracking.com).
- This theme is developed in the
  [gatsby_theme_aft](https://github.com/appsfortracking/gatsby_theme_aft)
  repository and any change requests for the theme should be filed in that
  repository.
