self.addEventListener('fetch', function (e) {
    console.log('service worker fetch')
})
self.addEventListener('install',  (event)=> {
    self.skipWaiting()
})
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim())
    console.log('service worker install')
})
self.addEventListener('message', event => {
    if (event.data !== null) {
      void self.registration.showNotification(event.data, {
        body: 'PWA Sample notification.',
        icon: '/labo-round-icon-192x192.png'
      })
    }
  })
  