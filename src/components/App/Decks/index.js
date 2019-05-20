import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Container, FlatListContainer, Title, Footer, NoContent } from '../../shared/styled';
import { connect } from 'react-redux';
import { setLocalNotification } from '../../../utils/helpers';
import Button from '../../shared/Button';
import Deck from './Deck';

class Decks extends Component {

  componentDidMount() {
    setLocalNotification(); // setLocalNotification will be called after rehydration is finished
  }

  navigateToCreateDeck = () => {
    this.props.navigation.navigate('CreateDeck');
  }

  render() {
    const { decks, navigation } = this.props;

    return(
      <Container>
        <Title>Decks</Title>
        <FlatListContainer>

          { decks.length === 0 &&
            <NoContent>No decks to display Please create one</NoContent>
          }

          <FlatList
            data={decks}
            renderItem={({item}) =>
              <Deck
                name={item.key}
                numOfCards={item.cards.length}
                onClick={() => navigation.navigate('Cards', { name: item.name })}
              />
            }
          />
        </FlatListContainer>
        <Footer>
          <Button
            text='new deck'
            iconName='add'
            onClick={this.navigateToCreateDeck}
          />
        </Footer>
      </Container>
    );
  }
}

function mapStateToProps ({decks}) {
  return {
    decks: Object.values(decks)
      .map(deck => ({key: deck.name, ...deck}))
  }
}

export default connect(mapStateToProps)(Decks);