# Apps For Tracking Documentation With Gatsby

The code in this repository is based on the
[Building your first Gatsby theme](https://www.youtube.com/watch?v=W2uTfay3doo)
video.

A test documentation site is released
[here](https://appsfortracking.github.io/gatsby_theme_aft/).

## To Release

- `rimraf` need to be installed globally for the `clean` script
- update development repo with `git status/add/commit/"push cj master"`
- switch to the release account of appsfortracking on the mac
- update release repo with `git push`
- if not previously done setup the npm user via `npm adduser`
- release the test site via `yarn clean/yarn/yarn site:build/yarn site:ghpages`
- verify the test site release at link noted above

## Notes
