import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions, TouchableOpacity } from 'react-native'
import { colorPallet } from '../../../utils/colors';
import { string, number } from 'prop-types';
import styled from 'styled-components/native';

const width = Dimensions.get('window').width;

const ListItem = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: ${width};
  border-bottom-color: ${props => props.theme.lightGrey};
  border-bottom-width: 1;
  border-style: solid;
  padding-right: 60;
  padding-left: 50;
  padding-bottom: 20;
  margin-bottom: 10;
  margin-top: 25;
`
const ItemInfo = styled.View`
  flex-direction: column;
`
const ItemName = styled.Text`
  font-size: 19;
  font-weight: 400;
  color: #454545;
`
const ItemNumCards = styled.Text`
  font-size: 16;
  font-weight: 100;
  margin-top: 3;
  color: #CCCCCC;
`

const Deck = ({name, numOfCards, onClick}) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <ListItem>
        <ItemInfo>
          <ItemName>{name.toLowerCase()}</ItemName>
          <ItemNumCards>{numOfCards} cards</ItemNumCards>
        </ItemInfo>
        <MaterialIcons
          name='keyboard-arrow-right'
          size={28}
          color={colorPallet.purple}
        />
      </ListItem>
    </TouchableOpacity>
  );
};

Deck.propTypes = {
  name: string.isRequired,
  numOfCards: number.isRequired
};

export default Deck;