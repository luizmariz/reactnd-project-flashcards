import { AsyncStorage } from 'react-native';
import { DECKS_STORAGE_KEY } from './_decks';

export function addDeck ({ deck, key }) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }))
}

export function removeDeck (key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((res) => {
      const data = JSON.parse(res);
      data[key] = undefined;
      delete data[key];
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
    });
}