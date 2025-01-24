import PushNotification from "react-native-push-notification";

PushNotification.configure({
    onNotification: function (notification) {
        console.log("Notification:" ,notification)
    
    },
    requestPermissions: true,
})

function sendAlertNotification (message) {
    PushNotification.localNotification({
        title:"Weather Alert",
        message,
    })
}