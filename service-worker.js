self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("simulador-v1").then(cache => {
      return cache.addAll([
        "index.html",
        "logo-tasa-latam-color.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});