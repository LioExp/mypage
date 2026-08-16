const CACHE = 'mypage-v6';
const URLS = [
  '/mypage/',
  '/mypage/index.html',
  '/mypage/style.css',
  '/mypage/animations.css',
  '/mypage/script.js',
  '/mypage/animations.js',
  '/mypage/assets/banner.png',
  '/mypage/assets/favicon2.jpg',
  '/mypage/assets/faber-preview.png',
  '/mypage/assets/myfi-preview.png',
  '/mypage/assets/kianda-preview.png',
  '/mypage/assets/setup-2026.jpg',
  '/mypage/assets/icons/tux.svg',
  '/mypage/assets/icons/python.svg',
  '/mypage/assets/icons/git.svg',
  '/mypage/assets/icons/bash.svg',
  '/mypage/assets/icons/rust.svg',
  '/mypage/assets/icons/fastapi.svg',
  '/mypage/assets/icons/wasm.svg',
  '/mypage/assets/icons/arch-linux.svg',
  '/mypage/assets/icons/debian.svg',
  '/mypage/assets/icons/containers.svg',
  '/mypage/assets/icons/owasp-top-10.svg',
  '/mypage/assets/icons/burp-suite.svg'
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
