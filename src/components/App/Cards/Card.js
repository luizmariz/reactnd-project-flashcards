import React, { Component } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native'
import { string } from 'prop-types';
import styled from 'styled-components/native';

const width = Dimensions.get('window').width;

const Container = styled.View`
  width: ${width};
  align-items: center;
  justify-content: center;
`
const ListItem = styled.View`
  align-items: center;
  justify-content: center;
  text-align: left;
  flex-direction: column;
  width: 85%;
  min-height: 130;
  border-color: ${props => props.theme.lightGrey};
  border-width: 1;
  border-style: solid;
  margin-bottom: 5;
  margin-top: 25;
  padding-top: 18;
  padding-bottom: 18;
  padding-left: 35;
  padding-right: 35;
`
const Text = styled.Text`
  color: #454545;
  font-size: 22;
  font-style: italic;
`
const Instruction = styled.Text`
  color: #454545;
  opacity: 0.3;
  font-size: 17;
  margin-top: 3;
`

class Card extends Component {
  state = { showAnswer: false }

  handleTextToggle = () => {
    this.setState(prev => ({ showAnswer: !prev.showAnswer }));
  }

  render() {
    const { showAnswer } = this.state;
    const {question, answer} = this.props;

    return (
      <TouchableOpacity onPress={this.handleTextToggle}>
        <Container>
            <ListItem>
              <Text>
                {showAnswer
                  ? answer.toLowerCase()
                  : question.toLowerCase()
                }
              </Text>
              <Instruction>
                tap to show the {showAnswer ? 'question' : 'answer'}
              </Instruction>
            </ListItem>
        </Container>
      </TouchableOpacity>
    );
  }
}

Card.propTypes = {
  question: string.isRequired,
  answer: string.isRequired
};

export default Card;