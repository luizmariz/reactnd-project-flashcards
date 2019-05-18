import React, { Component } from 'react';
import { FlatList, Dimensions, Text } from 'react-native';
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
  render() {
    return(
      <Container>
        <Title>Decks</Title>
        <FlatListContainer>
          <FlatList
            data={[{key: 'Pokemon', numOfCards: 13}, {key: 'Magic', numOfCards: 35}, {key: 'Magic', numOfCards: 35}, {key: 'Magic', numOfCards: 35}, {key: 'Magic', numOfCards: 35}, {key: 'Magic', numOfCards: 35}, {key: 'Magic', numOfCards: 35}, {key: 'Magic', numOfCards: 35}]}
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
            iconName='ios-add'
          />
        </Footer>
      </Container>
    );
  }
}

export default Decks;