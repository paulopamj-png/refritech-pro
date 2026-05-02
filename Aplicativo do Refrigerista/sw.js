// Instalação do Service Worker
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado');
});

// Intercepta as requisições (necessário para o celular liberar a instalação)
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => new Response('Você está offline.')));
});