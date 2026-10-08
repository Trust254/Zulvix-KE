const CACHE_NAME = "zulvix-ke-v2";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  // Do not intercept or cache requests.
  // This keeps the existing website behavior unchanged.
});
