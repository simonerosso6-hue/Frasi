const CACHE = 'frasi-di-mezzanotte-v7';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'icon-180.png', 'icon-192.png', 'icon-512.png'];

// Ogni versione ha la sua copia dei file. Quella nuova si scarica in disparte e aspetta:
// l'app continua a usare la versione corrente finché non tocchi "Aggiorna".
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return Promise.all(FILES.map(function (u) {
      return fetch(new Request(u, { cache: 'reload' })).then(function (res) {
        if (!res.ok) throw new Error('Scarico non riuscito: ' + u);
        return c.put(u, res);
      });
    }));
  }));
});

self.addEventListener('message', function (e) {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});

// Sempre la copia salvata della versione in uso (funziona anche offline); la rete solo se manca qualcosa
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.open(CACHE).then(function (c) {
      return c.match(e.request, { ignoreSearch: true }).then(function (hit) {
        if (hit) return hit;
        return fetch(e.request).catch(function () {
          return e.request.mode === 'navigate' ? c.match('index.html') : Response.error();
        });
      });
    })
  );
});
