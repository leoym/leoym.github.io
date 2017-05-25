mportScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/loja-adidas.html',
       '/loja-bacio-di-latte.html',
       '/loja-brooksfield.html'
       '/loja-burberry.html'

     ]);
   })
 );
});
