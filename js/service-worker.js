self.addEventListener('fetch', function (e) {
    console.log('service worker fetch')
})
self.addEventListener('install', function (e) {
})
self.addEventListener('activate', function (e) {
    console.log('service worker install')
    Notification.requestPermission().then((result) => {
        console.log(result);
    });
})