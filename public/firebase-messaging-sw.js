importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging.js");

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

messaging.onBackgroundMessage(function (payload) {
    console.log("[firebase-messaging-sw.js] Received background message ", payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/firebase-logo.png",
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
