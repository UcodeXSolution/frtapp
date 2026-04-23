importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-sw.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-sw.js');

firebase.initializeApp({
    apiKey: "AIzaSyCmtV4tRTpCCgFZIVxGsW2lLiExZsTIOR4",
    authDomain: "frtapp-ff79b.firebaseapp.com",
    projectId: "frtapp-ff79b",
    storageBucket: "frtapp-ff79b.firebasestorage.app",
    messagingSenderId: "1060214465512",
    appId: "1:1060214465512:ios:377eddb6c315792a43ba5d"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/favicon.ico'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
