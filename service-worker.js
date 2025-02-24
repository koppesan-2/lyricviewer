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
        icon: window.location.href.indexOf("https://koppesan-2github.io")==-1?"/img/icons/circle-play.svg":"/lyricviewer/img/icons/circle-play.svg"
      })
    }
  })
  