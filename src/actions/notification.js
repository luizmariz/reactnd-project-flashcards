export const SCHEDULE_NOTIFICATION = 'SCHEDULE_NOTIFICATION';
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';

export function scheduleNotification (notification) {
  return {
    type: SCHEDULE_NOTIFICATION,
    notification
  }
}

export function clearNotification (notification) {
  return {
    type: CLEAR_NOTIFICATION,
    notification
  }
}