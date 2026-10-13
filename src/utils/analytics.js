// Thin wrapper around the global gtag() loaded in public/index.html.
// Safe to call anywhere: it no-ops if the GA script is blocked or not loaded yet.
export const trackEvent = (eventName, params = {}) => {
  console.log(window);
  console.log(window.gtag)
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    console.log('Tracking event:', eventName, params);
    window.gtag('event', eventName, params);
  }
};

// Extracts the file name from a (possibly hashed) asset URL.
// "…/static/media/carta-epica-1.a1b2c3d4.png" -> "carta-epica-1.a1b2c3d4.png"
export const getFileName = (src) => {
  if (!src) return 'unknown';
  try {
    return src.split('/').pop() || 'unknown';
  } catch (err) {
    return 'unknown';
  }
};
