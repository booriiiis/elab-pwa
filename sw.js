'use strict';

self.addEventListener(
    'install', function (event) {
        event.waitUntil(
            self.skipWaiting()
        );
    }
);
self.addEventListener('fetch', () => {});


self.addEventListener('push', function (event) {
    console.log('Received push');
    var notificationTitle = 'Hello';


if(event.data){
    var dataText = event.data.text()
    const obj = dataText ? JSON.parse(dataText) : ''

    event.waitUntil( self.registration.showNotification(notificationTitle, {
        body: obj.data,
        icon: 'icon',
        badge: 'badge',
        tag: 'simple-push-demo-notification'+Math.random() * 2.5,
        data: {
            url: 'https://developers.google.com/web/fundamentals/getting-started/push-notifications/',
        }
      }))
    }    
});

self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    if (event.notification.data && event.notification.data.url) {
        clients.openWindow(event.notification.data.url);
    }
});