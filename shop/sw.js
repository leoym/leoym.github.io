mportScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/shop/',
       '/shop/index.html',
       '/shop/loja-adidas.html',
       '/shop/loja-bacio-di-latte.html',
       '/shop/loja-brooksfield.html'
       '/shop/loja-burberry.html'

     ]);
   })
 );
});
