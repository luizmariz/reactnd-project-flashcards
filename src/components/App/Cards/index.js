import React, { Component } from 'react';
import { FlatList, Alert } from 'react-native';
import { connect } from 'react-redux';
import { setLocalNotification, clearLocalNotification } from '../../../utils/helpers';
import { Container, FlatListContainer, Title, Footer, NoContent } from '../../shared/styled';
import styled from 'styled-components/native';
import Button from '../../shared/Button';
import Card from './Card';

const QuizBtn = styled(Button)`
  margin-top: 13;
  margin-bottom: 10;
`
const DeckName = styled(Title)`
  font-size: 32;
`
const SubTitle = styled.Text`
  margin-top: -28;
  margin-bottom: 20;
  color: #454545;
  font-size: 20;
  opacity: 0.6;
`
const StyledFooter = styled(Footer)`
  flex: 0.5;
`

class Cards extends Component {

  navigateToCreateCard = () => {
    const { navigation, deck } = this.props;
    navigation.navigate('CreateCard', { deck: deck.name });
  }

  navigateToQuiz = () => {
    const { navigation, deck, cards } = this.props;

    if (cards.length > 0) {

      clearLocalNotification()
        .then(setLocalNotification);

      navigation.navigate('Quiz', { deck: deck.name });

    } else {

      Alert.alert(
        "No cards :(",
        'Please, create a card before start a quiz.',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      );

    }
  }

  render() {
    const { deck, cards } = this.props;

    return(
      <Container>
        <DeckName>{deck.name}</DeckName>
        <SubTitle>{cards.length} cards</SubTitle>
        <FlatListContainer>

          { deck.cards.length === 0 &&
            <NoContent>No flashcard :({'\n'}Please create one</NoContent>
          }

          <FlatList
            data={cards}
            renderItem={({item}) =>
              <Card
                question={item.key}
                answer={item.answer}
              />
            }
          />

        </FlatListContainer>
        <StyledFooter>
          <Button
            text='add card'
            iconName='add'
            onClick={this.navigateToCreateCard}
          />
          <QuizBtn
            text='start quiz'
            onClick={this.navigateToQuiz}
            color='#454545'
          />
        </StyledFooter>
      </Container>
    );
  }
}

function mapStateToProps ({decks}, props) {
  const name = props.navigation.getParam('name', '');

  return {
    deck: decks[name],
    cards: decks[name].cards
      .map(card => ({key: card.question, ...card}))
  }
}

export default connect(mapStateToProps)(Cards);