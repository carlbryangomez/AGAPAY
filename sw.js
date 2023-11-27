// Install service worker
self.addEventListener('install', (evt) => {
    evt.waitUntil(
        // You can perform tasks like caching resources during installation
        console.log('Service worker is being installed')
    );
});

// Activate service worker
self.addEventListener('activate', (evt) => {
    evt.waitUntil(
        // You can perform tasks like cleaning up old caches during activation
        console.log('Service worker is being activated')
    );
});

// Fetch event
self.addEventListener('fetch', (evt) => {
    // Access information about the fetch event
    const request = evt.request;
    console.log('Fetch event for:', request.url);
    
    evt.respondWith(
        // You can continue with your logic for responding to the fetch event
        fetch(request)
    );
});
