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
//     evt.waitUntil(
//         caches.open(cacheName)
//         .then(cache =>{
//             cache.addAll(cacheAssets)
//         }).then(()=> self.skipWaiting())
//     )
})

self.addEventListener('activate', evt =>{
    console.log("Service Worker Activated")
})

// self.addEventListener('fetch', evt =>{
//     evt.respondWith(
//         caches.match(evt.request).then(cacheRes=>{
//             console.log('Cached')
//             return cacheRes 
//             // ||  fetch(evt.response)
//             // .then(async fetchRes =>{
//             //     const cache = await caches.open(cacheName);
//             //     cache.put(evt.request.url, fetchRes.clone());
//             //     return fetchRes;
//             // })
            
//         })
//     )
// })
