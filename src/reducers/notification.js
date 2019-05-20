import { SCHEDULE_NOTIFICATION, CLEAR_NOTIFICATION } from '../actions/notification';

export default function notification (state = {}, action) {
  switch(action.type) {
    case SCHEDULE_NOTIFICATION:
      return {
        ...state,
        [action.notification.key]: action.notification
      };
    case CLEAR_NOTIFICATION:
      return {
        ...state,
        [action.notification.key]: null
      }
    default:
      return state;
  }
}