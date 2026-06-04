const CACHE = 'mypage-v2';
const URLS = [
  '/mypage/',
  '/mypage/index.html',
  '/mypage/style.css',
  '/mypage/script.js',
  '/mypage/assets/banner.png',
  '/mypage/assets/favicon2.jpg',
  '/mypage/assets/faber-preview.png',
  '/mypage/assets/myfi-preview.png',
  '/mypage/assets/setup-2026.jpg'
];

const NAV_URLS = new Set(['/mypage/', '/mypage/index.html']);

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(URLS)).then(() => self.skipWaiting())
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

  const url = new URL(req.url);
  const isNav = NAV_URLS.has(url.pathname);

  if (isNav) {
    event.respondWith(
      fetch(req).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(cache => cache.put(req, clone));
        return res;
      }).catch(() => caches.match(req))
    );
  } else {
    event.respondWith(
      caches.match(req).then(cached => {
        const fetchPromise = fetch(req).then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(cache => cache.put(req, clone));
          return res;
        }).catch(() => cached);
        return cached || fetchPromise;
      })
    );
  }
});
