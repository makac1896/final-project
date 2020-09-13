const cacheName = 'site-static';
const cacheAssets = [
                    'index.html',
                    'fallback.html',
                    'css/style.css',
                    'manifest.json',
                    'app.js',
                    'img/bg1.jpg',
                    'img/bg2.jpg',
                    'img/icon1.svg',
                    'calendar.png',
                    'coffee-icon.png'
]


self.addEventListener('install', evt => {
    console.log("Service Worker Installed")
    evt.waitUntil(
        caches.open(cacheName)
        .then(cache =>{
            cache.addAll(cacheAssets)
        }).then(()=> self.skipWaiting())
    )
})

self.addEventListener('activate', evt =>{
    console.log("Service Worker Activated")
})

self.addEventListener('fetch', evt =>{
    evt.respondWith(fetch(evt.request).catch(()=> caches.match(e.request)))
    )
})
