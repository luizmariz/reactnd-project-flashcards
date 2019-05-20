import { CREATE_DECK, ADD_CARD } from '../actions/decks';

function decks (state = {}, action) {
  switch(action.type) {
    case CREATE_DECK:
      return {
        ...state,
        [action.deck.name]: action.deck
      }
    case ADD_CARD:
      return {
        ...state,
        [action.deckName]: {
          ...state[action.deckName],
          cards: state[action.deckName].cards.concat(action.card)
        }
      }
    default:
      return state;
  }
}

export default decks;