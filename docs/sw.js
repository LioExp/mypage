const CACHE = 'mypage-v21';
const URLS = [
  './',
  './index.html',
  './style.css',
  './animations.css',
  './yt-feed.json',
  './animations.js',
  './assets/banner.png',
  './assets/favicon2.jpg',
  './assets/faber-preview.png',
  './assets/myfi-preview.webp',
  './assets/kianda-preview.png',
  './assets/setup-2026.jpg',
  './assets/icons/tux.svg',
  './assets/icons/python.svg',
  './assets/icons/git.svg',
  './assets/icons/bash.svg',
  './assets/icons/rust.svg',
  './assets/icons/fastapi.svg',
  './assets/icons/wasm.svg',
  './assets/icons/arch-linux.svg',
  './assets/icons/debian.svg',
  './assets/icons/containers.svg',
  './assets/icons/owasp-top-10.svg',
  './assets/icons/burp-suite.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(async cache => {
      await Promise.allSettled(URLS.map(u => cache.add(u)));
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  if (!req.url.startsWith(self.location.origin)) return;

  event.respondWith(
    fetch(req).then(res => {
      const clone = res.clone();
      caches.open(CACHE).then(cache => cache.put(req, clone));
      return res;
    }).catch(() => caches.match(req))
  );
});
