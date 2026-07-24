/**
 * Resolves a root-relative public asset path (e.g. "/photos/cover.jpg") against
 * Vite's configured base path, so it still works on GitHub Pages project sites
 * served from a subpath (e.g. "/UFIC/") instead of the domain root.
 */
export function withBase(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
