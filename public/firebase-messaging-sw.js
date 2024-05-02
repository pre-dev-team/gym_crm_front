importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js");

const firebaseConfig = {
    apiKey: "AIzaSyC6yZPhk-g7UgUDV5oCIcCXSyTG7ku2ggY",
    authDomain: "predev-21d70.firebaseapp.com",
    projectId: "predev-21d70",
    storageBucket: "predev-21d70.appspot.com",
    messagingSenderId: "1024247377916",
    appId: "1:1024247377916:web:b1609d98bb802378d54c79",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

self.addEventListener("install", function (e) {
    self.skipWaiting();
});

self.addEventListener("activate", function (e) {
    console.log("fcm service worker가 실행되었습니다.");
});

messaging.onBackgroundMessage((payload) => {
    console.log("백그라운드 푸쉬 알림 수신", payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
