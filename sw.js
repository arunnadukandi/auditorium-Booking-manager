// Minimal service worker — its only job is to exist and handle fetch, which
// is one of the eligibility requirements for Chrome/Android to offer the
// "Install app" prompt. It intentionally does no caching: this app's data
// depends on always talking to a live Google Apps Script backend, so an
// offline-cached copy could show stale bookings, which is worse than no
// offline support at all for a scheduling tool.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
