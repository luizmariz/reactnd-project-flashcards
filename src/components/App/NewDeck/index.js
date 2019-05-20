import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { generateNewDeck } from '../../../utils/helpers';
import { createDeck } from '../../../actions/decks';
import { StackActions, NavigationActions } from 'react-navigation';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import styled from 'styled-components/native';

const resetAction = StackActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home' }),
  ],
}); // Clearing the stack, we allow the user to go back from cardsView to deckView

const Container = styled.View`
  justify-content: flex-end;
  align-items: center;
  margin-top: 200;
  margin-bottom: 20;
`
const NewDeckInput = styled(Input)`
  margin-bottom: 40;
`

class NewDeck extends Component {
  state = { text: '' }

  handleTextChange = text => {
    this.setState(prev => ({ text }));
  }

  handleCreateDeck = () => {
    const { newDeck, navigation } = this.props;
    const deck = generateNewDeck(this.state.text);

    newDeck(deck);

    navigation.dispatch(resetAction); // clear the stack before navigate
    navigation.navigate('Cards', {name: deck.name});
  }

  render() {
    const { text } = this.state;

    return(
      <KeyboardAvoidingView
        style={{flex: 1}}
        enabled
      >
        <Container>
          <NewDeckInput
            label={"new deck's name"}
            value={text}
            onChange={this.handleTextChange}
          />
          <Button
            disabled={text === ''}
            text={'create deck'}
            onClick={this.handleCreateDeck}
          />
        </Container>
      </KeyboardAvoidingView>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    newDeck: deck =>
      dispatch(createDeck(deck)),
  }
}

export default connect(null, mapDispatchToProps)(NewDeck);