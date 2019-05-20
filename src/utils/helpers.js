import { Notifications, Permissions } from 'expo';
import { store } from '../components/App/setupStore';
import { scheduleNotification, clearNotification } from '../actions/notification';

// Probably AsyncStorage + Notification is the right way of implementation
// but I'm curious about the use of redux-persist, since it's also persisting
// the state of the app with AsyncStorage.

const NOTIFICATION_KEY = "what_a_lovely_key";

export function generateNewDeck(name) {
  return {
    name,
    cards: []
  };
}

export function generateNewCard(question, answer) {
  return {
    question,
    answer
  };
}

export function getPercentage(value, total) {
  return Math.floor((100*value)/total);
}

function createNotification () {
  return {
    title: "📚 Daily quiz",
    body: "Do not forget to study today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function clearLocalNotification () {
  store.dispatch(clearNotification({key: NOTIFICATION_KEY}));
  return Notifications.cancelAllScheduledNotificationsAsync;
}

export function setLocalNotification () {
  const data = store.getState();

  if (data.notification[NOTIFICATION_KEY] === null || data.notification[NOTIFICATION_KEY] === undefined) {
    Permissions.askAsync(Permissions.NOTIFICATIONS)
      .then(({status}) => {
        console.log('oi')
        if (status === 'granted') {
          Notifications.cancelAllScheduledNotificationsAsync()

          let shortly = new Date(Date.now() + (8*3600*1000)); // Next reminder In 8 hours
          let notification = createNotification();

          Notifications.scheduleLocalNotificationAsync(
            notification,
            {
              time: shortly,
              repeat: 'hour',
            }
          ).then(store.dispatch(scheduleNotification({key: NOTIFICATION_KEY, ...notification})));
        }
      })
  }
}