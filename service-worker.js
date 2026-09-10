/* Increment for a cache-schema change; app code and course data update automatically. */
const CACHE_VERSION = 'core-java-mastery-v4';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;
const APP_SHELL = [
  './', './index.html', './offline.html', './manifest.json', './Src/CSS/style.css', './Src/JS/script.js', './Src/JS/pwa.js', './Src/JS/firebase.js', './Src/JS/topicData.js', './Public/Images/java.png', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png',
  'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js', 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js', 'https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js'
];
self.addEventListener('install', event => { event.waitUntil(caches.open(STATIC_CACHE).then(cache => cache.addAll(APP_SHELL))); self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('core-java-mastery-') && ![STATIC_CACHE, RUNTIME_CACHE].includes(key)).map(key => caches.delete(key)))).then(() => self.clients.claim())); });
function isStaticAsset(request) { return ['style', 'script', 'image', 'font', 'manifest', 'worker'].includes(request.destination); }
function isAppSource(request, url) {
  return url.origin === self.location.origin && ['script', 'style', 'manifest'].includes(request.destination);
}
function saveResponse(request, response) {
  if (response.ok || response.type === 'opaque') caches.open(RUNTIME_CACHE).then(cache => cache.put(request, response.clone()));
  return response;
}
function latestCachedResponse(request) {
  return caches.open(RUNTIME_CACHE).then(cache => cache.match(request))
    .then(cached => cached || caches.match(request));
}
self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin === self.location.origin && (/\/api\//.test(url.pathname) || request.headers.has('authorization'))) return;
  // Pages are always refreshed from the deployment when online. Offline uses the last saved page.
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then(response => saveResponse(request, response)).catch(() => latestCachedResponse(request).then(cached => cached || caches.match('./offline.html'))));
    return;
  }
  // Course data, JavaScript and CSS must stay in sync with the latest deployment.
  // If the network is unavailable, the prior complete version is still used.
  if (isAppSource(request, url)) {
    event.respondWith(fetch(request).then(response => saveResponse(request, response)).catch(() => latestCachedResponse(request)));
    return;
  }
  // Images, fonts and icons are safe cache-first assets.
  if (isStaticAsset(request)) event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => saveResponse(request, response))));
});
