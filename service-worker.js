// Simple service worker to cache application shell for offline use
const CACHE_NAME = 'productpic-cache-v1';
const URLS_TO_CACHE = [
  '/',
  'index.html',
  'manifest.json',
  'service-worker.js',
  'herologin.png',
  'file-card.png',
  'file-poster.png',
  'file-phone.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});