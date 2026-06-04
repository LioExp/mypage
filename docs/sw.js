const CACHE = 'mypage-v1';
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

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      const clone = res.clone();
      caches.open(CACHE).then(cache => cache.put(req, clone));
      return res;
    }))
  );
});
