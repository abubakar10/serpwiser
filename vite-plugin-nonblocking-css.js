/**
 * Vite plugin: improve mobile Performance (LCP, FCP, render-blocking).
 * - Makes main CSS non-blocking (preload + onload).
 * - Moves main script to end of body so it doesn't block parsing.
 * - Adds modulepreload for entry script (fetch starts early).
 */
export default function nonBlockingCss() {
  return {
    name: 'non-blocking-css',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        let out = html;

        // 1. Make main stylesheet non-blocking
        const cssLinkMatch = out.match(/<link[^>]+href="(\/assets\/[^"]+\.css)"[^>]*>/);
        if (cssLinkMatch) {
          const full = cssLinkMatch[0];
          const href = cssLinkMatch[1];
          const hasCrossorigin = full.includes('crossorigin');
          const cross = hasCrossorigin ? ' crossorigin' : '';
          const newCss = `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'"${cross}>\n<noscript><link rel="stylesheet" href="${href}"${cross}></noscript>`;
          out = out.replace(full, newCss);
        }

        // 2. Move main entry script from head to before </body> (reduces main-thread blocking during parse)
        const scriptMatch = out.match(/<script type="module"[^>]*src="(\/assets\/[^"]+\.js)"[^>]*><\/script>/);
        if (scriptMatch) {
          const scriptTag = scriptMatch[0];
          const href = scriptMatch[1];
          out = out.replace(scriptTag, '');
          out = out.replace('</body>', `${scriptTag}</body>`);
          // Add modulepreload in head so fetch starts early
          if (!out.includes(`modulepreload" href="${href}"`)) {
            out = out.replace('</head>', `<link rel="modulepreload" href="${href}"></head>`);
          }
        }

        return out;
      },
    },
  };
}
