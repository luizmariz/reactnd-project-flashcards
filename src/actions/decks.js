export const CREATE_DECK = 'CREATE_DECK';
export const ADD_CARD = 'ADD_CARD';

export function createDeck (deck) {
  return {
    type: CREATE_DECK,
    deck
  }
}

export function addCard (card, deckName) {
  return {
    type: ADD_CARD,
    deckName,
    card
  }
}