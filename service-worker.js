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