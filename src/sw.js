workbox.core.skipWaiting()
workbox.core.clientsClaim()

workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com'),
    new workbox.strategies.StaleWhileRevalidate()
)

self.addEventListener('push', event => {
    const title = 'Get Started With Workbox'
    const options = {
        body: event.data.text(),
    }
    event.waitUntil(self.registration.showNotification(title, options))
})

workbox.precaching.precacheAndRoute(self.__precacheManifest)
