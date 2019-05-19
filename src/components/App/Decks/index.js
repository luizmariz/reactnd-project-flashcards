import React, { Component } from 'react';
import { FlatList, Dimensions, Text } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import Button from '../../shared/Button';
import Deck from './Deck';

const width = Dimensions.get('window').width;

const Title = styled.Text`
  font-size: 45;
  font-weight: 300;
  margin-bottom: 30;
  color: #454545;
`
const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`
const FlatListContainer = styled.View`
  flex: 0.7;
`

const Footer = styled.View`
  width: ${width};
  flex: 0.3;
  justify-content: center;
  align-items: center;
`

class Decks extends Component {

  navigateToCreateDeck = () => {
    this.props.navigation.navigate('CreateDeck');
  }

  render() {
    const { decks } = this.props;

    return(
      <Container>
        <Title>Decks</Title>
        <FlatListContainer>
          <FlatList
            data={decks}
            renderItem={({item}) =>
              <Deck
                name={item.key}
                numOfCards={item.numOfCards}
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