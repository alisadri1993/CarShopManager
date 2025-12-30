const CACHE_NAME = 'carshopmanager-v1';
const urlsToCache = [
  '/CarShopManager/',
  '/CarShopManager/index.html',
  '/CarShopManager/manifest.json',
  // Add paths to your CSS/JS files
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});