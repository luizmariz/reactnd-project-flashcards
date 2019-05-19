import { CREATE_DECK } from '../actions/decks';

function decks (state = {}, action) {
  switch(action.type) {
    case CREATE_DECK:
      return {
        ...state,
        [action.deck.name]: action.deck
      }
    default:
      return state;
  }
}

export default decks;