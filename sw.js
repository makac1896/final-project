let cacheName = 'site-static';


self.addEventListener('install', evt => {
    console.log("Service Worker Installed")
    evt.waitUntil(
        caches.open(cacheName).then(cache =>{
            cache.addAll(
                [
                    '/',
                    '/index.html',
                    '/fallback.html',
                    '/css/style.css',
                    '/manifest.json',
                    '/app.js',
                    '/img/bg1.jpg',
                    '/img/bg2.jpg',
                    '/img/icon1.svg',
                    '/coffee-icon.png'
                ]
            )
        })
    )
})

self.addEventListener('activate', evt =>{
    console.log("Service Worker Activated")
})

self.addEventListener('fetch', evt =>{
    evt.respondWith(
        caches.match(evt.request).then(cacheRes=>{
            console.log('Cached')
            return cacheRes 
            // ||  fetch(evt.response)
            // .then(async fetchRes =>{
            //     const cache = await caches.open(cacheName);
            //     cache.put(evt.request.url, fetchRes.clone());
            //     return fetchRes;
            // })
            
        })
    )
})
