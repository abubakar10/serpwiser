/**
 * Vite plugin: improve LCP by (1) making main CSS non-blocking, (2) modulepreload for main JS.
 */
export default function nonBlockingCss() {
  return {
    name: 'non-blocking-css',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        // 1. Make main stylesheet non-blocking (saves ~150ms on mobile)
        let out = html.replace(
          /<link rel="stylesheet"([^>]*?)href="(\/assets\/[^"]+\.css)"([^>]*)>/g,
          (_, before, href, after) =>
            `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'"${before}${after}>` +
            `<noscript><link rel="stylesheet" href="${href}"${before}${after}></noscript>`
        );
        // 2. Preload main entry script so it starts fetching earlier (reduces critical path)
        const scriptMatch = out.match(/<script type="module"([^>]*?)src="(\/assets\/[^"]+\.js)"([^>]*)>/);
        if (scriptMatch) {
          const href = scriptMatch[2];
          out = out.replace('</head>', `<link rel="modulepreload" href="${href}"></head>`);
        }
        return out;
      },
    },
  };
}
