/**
 * Absolute URL for a file in public/, given as a relative path ('icons/x.svg').
 *
 * Plain <img src> can take the relative path as-is: every route is one
 * segment deep, so it resolves against the site root. A CSS url() cannot -
 * inside a stylesheet it resolves against the stylesheet's own folder - so
 * anything passed to CSS goes through here. BASE_URL is '/' locally and
 * '/<repo-name>/' on GitHub Pages.
 */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
