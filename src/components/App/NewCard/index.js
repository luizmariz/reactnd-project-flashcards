import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { generateNewCard } from '../../../utils/helpers';
import { addCard } from '../../../actions/decks';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import styled from 'styled-components/native';

const Container = styled.View`
  justify-content: flex-end;
  align-items: center;
  margin-top: 200;
  margin-bottom: 20;
`
const NewCardInput = styled(Input)`
  margin-bottom: 3;
`
const StyledButton = styled(Button)`
  margin-top: 25;
`

class NewCard extends Component {
  state = {
      questText: '',
      answText: '',
  }

  handleQuestChange = questText => {
    this.setState(prev => ({ questText }));
  }

  handleAnswChange = answText => {
    this.setState(prev => ({ answText }));
  }

  handleCreateCard = () => {
    const { newCard, navigation } = this.props;
    const { questText, answText } = this.state;

    const card = generateNewCard(questText, answText);
    const deckName = navigation.getParam('deck', '');

    newCard(card, deckName);
    navigation.navigate('Cards');
  }

  render() {
    const { questText, answText } = this.state;

    return(
      <KeyboardAvoidingView
        style={{flex: 1}}
        enabled
      >
        <Container>
          <NewCardInput
            label={"question"}
            value={questText}
            onChange={this.handleQuestChange}
          />
          <NewCardInput
            label={"answer"}
            value={answText}
            onChange={this.handleAnswChange}
          />
          <StyledButton
            disabled={questText === '' || answText === ''}
            text={'create card'}
            onClick={this.handleCreateCard}
          />
        </Container>
      </KeyboardAvoidingView>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    newCard: (card, deckName) =>
      dispatch(addCard(card, deckName)),
  }
}

export default connect(null, mapDispatchToProps)(NewCard);